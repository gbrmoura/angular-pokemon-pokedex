import { Component, Input, OnInit } from '@angular/core';
import { of, switchMap, tap } from 'rxjs';
import { HttpService, PokemonFormattingService } from 'src/app/services';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() id: string | undefined;

  pokemon: any | undefined;
  color: string | undefined;

  constructor(
    private http: HttpService,
    public poke: PokemonService,
    public format: PokemonFormattingService
  ) { }

  ngOnInit(): void {
    this.http.getPokemon(this.id as string).pipe(
      tap((pokemon) => this.pokemon = pokemon)
    ).subscribe()
  }

}
