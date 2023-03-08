import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-pokemon-chain-card',
  templateUrl: './pokemon-chain-card.component.html',
  styleUrls: ['./pokemon-chain-card.component.scss']
})
export class PokemonChainCardComponent implements OnInit {

  @Input() pokemonSpeciesId: any;
  @Input() pokemonEvolveReason: any;

  public pokemons: any;
  public species: any;

  constructor(
      private http: HttpService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.prepareData();
  }

  public prepareData(): void {
    this.http.getPokemon(this.pokemonSpeciesId).pipe(
      tap((pokemon) => this.pokemons = pokemon),
      switchMap( _ => this.http.getPokemonSpecies(this.pokemonSpeciesId)),
      tap((specie) => this.species = specie),
    ).subscribe();
  }

  public getImageSourceValue(pokemon: any): string {
    return pokemon.sprites.front_default;
  }

  public goToPokemon(): void {
    this.router.navigate([`/pokemons/${this.pokemons.name}`]);
  }

  public getEvolveDescription(): string {
    return 'not implemented yet';
  }
}
