import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, merge, Observable, of, startWith, Subject, Subscription, switchMap } from 'rxjs';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy, AfterViewInit {

  isLoading: boolean = false;
  pokemons: any[] = [];

  public filterSubject: Subject<void> = new Subject();
  public filterStr = '';

  private subscription = new Subscription();

  private pageSize: number = 20;
  private pageNumber: number = 1;

  constructor(
    private http: HttpService
  ) { }

  ngAfterViewInit(): void {
    this.isLoading = true;

    const filterChange$ = this.filterSubject.pipe(
      debounceTime(500),
    )

    const changesEvent$ = merge(filterChange$).pipe(
      // tap(_ => page.index = 0)
    );

    this.subscription = merge(changesEvent$).pipe(
      startWith({}),
      switchMap(() => this.http.getPokemons(10000, 0).pipe(
        map((data) => !data.results ? [] : data.results),
      )),
      switchMap((results) => {
        return of(results
          .filter((result: any) => String(result.name).toLowerCase().replace('-', ' ').includes(this.filterStr.toLowerCase()))
          .slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize)
        );
      })
    ).subscribe(
      (results) => {
        this.pokemons = results;
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.isLoading = true;
  }

}
