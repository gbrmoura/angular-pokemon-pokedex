import { Component, Input, OnInit } from '@angular/core';
import { of, switchMap, tap } from 'rxjs';
import { HttpService } from 'src/app/services';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() id: string | undefined;

  pokemon: any | undefined;
  form: any | undefined;
  color: string | undefined;

  constructor(
    private http: HttpService,
    public poke: PokemonService
  ) { }

  ngOnInit(): void {
    this.http.getPokemon(this.id as string).pipe(
      tap((pokemon) => this.pokemon = pokemon),
      switchMap((pokemon) => this.http.getPokemonForm(pokemon.id as string)),
      tap((form) => this.form = form)
    ).subscribe()
  }

  formatPokemonName(pokemon: string): string {
    return pokemon.replace(/-/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));;
  }

}
