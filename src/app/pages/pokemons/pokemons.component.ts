import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    private htpp: HttpService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.htpp.getPokemons(20, 0, '').subscribe(
      (data) => this.pokemons = data.results
    )
  }

}
