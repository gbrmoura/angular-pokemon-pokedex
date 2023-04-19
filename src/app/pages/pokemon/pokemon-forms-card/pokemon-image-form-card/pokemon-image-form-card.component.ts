import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services';

@Component({
	selector: 'app-pokemon-image-form-card',
	templateUrl: './pokemon-image-form-card.component.html',
	styleUrls: ['./pokemon-image-form-card.component.scss'],
})
export class PokemonImageFormCardComponent implements OnChanges {
	@Input() pokemon: any;

	public form: any;
	public algo: any;

	constructor(private http: HttpService, private router: Router) {}

	ngOnChanges(changes: SimpleChanges): void {
		this.http.getPokemonForm(this.pokemon.name).subscribe({
			next: (form) => {
				this.form = form;
			},
		});
	}

	public getImageSourceValue(pokemon: any): string {
		return pokemon.sprites.front_default;
	}

	public goToPokemon(): void {
		this.router.navigate([`/pokemons/${this.pokemon.name}`]);
	}
}
