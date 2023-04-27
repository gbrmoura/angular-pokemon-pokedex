import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {
	debounceTime,
	distinctUntilChanged,
	map,
	merge,
	Observable,
	of,
	startWith,
	Subject,
	Subscription,
	switchMap,
	tap,
} from 'rxjs';
import { HttpService } from 'src/app/services';

@Component({
	selector: 'app-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit, OnDestroy, AfterViewInit {
	isLoading: boolean = false;
	pokemons: any[] = [];

	public filterSubject: Subject<void> = new Subject();
	public filterStr = '';

	private subscription = new Subscription();

	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	public pageSize: number = 20;
	public pageIndex: number = 0;
	public length: number = 0;

	constructor(private http: HttpService) {}

	ngAfterViewInit(): void {
		this.isLoading = true;

		const filterChange$ = this.filterSubject.pipe(debounceTime(500));

		const changesEvent$ = merge(filterChange$).pipe(tap(() => (this.paginator.pageIndex = 0)));

		this.subscription = merge(changesEvent$, this.paginator.page)
			.pipe(
				startWith({}),
				switchMap(() =>
					this.http
						.getPokemons(10000, 0)
						.pipe(map((data) => (!data.results ? [] : data.results)))
				),
				switchMap((results) => {
					const filterRes = this.filterPokemon(this.filterStr, results);
					this.length = filterRes.length;
					return of(
						filterRes.slice(
							this.pageIndex * this.pageSize,
							(this.pageIndex + 1) * this.pageSize
						)
					);
				})
			)
			.subscribe((results) => {
				this.pokemons = results;
				this.isLoading = false;
			});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	ngOnInit(): void {
		this.isLoading = true;
	}

	handlePageEvent(event: PageEvent): void {
		this.length = event.length;
		this.pageSize = event.pageSize;
		this.pageIndex = event.pageIndex;
	}

	filterPokemon(search: string, pokemons: any[]): any[] {
		return pokemons.filter((result: any) =>
			String(result.name).toLowerCase().replace('-', ' ').includes(search.toLowerCase())
		);
	}
}
