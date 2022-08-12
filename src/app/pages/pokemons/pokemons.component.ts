import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  isLoading: boolean = false;
  pokemons: any[] = [];

  public filterSubject: Subject<void> = new Subject();
  public filterStr = '';

  constructor(
    private htpp: HttpService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {

    this.isLoading = true;

    this.htpp.getPokemons(20, 0, '').subscribe(
      (data) => {
        this.pokemons = data.results
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    )
  }

  getPokemons2(): void {

  }

}
