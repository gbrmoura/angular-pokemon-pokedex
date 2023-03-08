import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public isLoading: boolean = false;

  public pokemon: any;
  public species: any;
  public forms: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadPokemonData();

    this.activeRoute.params.subscribe(routeParams => {
      this.loadPokemonData();
      this.scrollTop();
    });
  }

  public loadPokemonData(): void {
    this.isLoading = true;
    const id = String(this.route.snapshot.paramMap.get('pokemon'));
    this.http.getPokemon(id as string).pipe(
      tap((pokemon) => this.pokemon = pokemon),
      switchMap((pokemon) => this.http.getPokemonSpecies(pokemon.species.name)),
      tap((specie) => this.species = specie),
    ).subscribe({
      next: () => this.isLoading = false,
      error: () => this.isLoading = false,
    });
  }

  public scrollTop(): void {

  }

}

