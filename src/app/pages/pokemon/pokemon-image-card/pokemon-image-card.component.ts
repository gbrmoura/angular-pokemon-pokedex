import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonImage } from 'src/app/interfaces';
import { PokemonService } from 'src/app/services';

@Component({
	selector: 'app-pokemon-image-card',
	templateUrl: './pokemon-image-card.component.html',
	styleUrls: ['./pokemon-image-card.component.scss'],
})
export class PokemonImageCardComponent implements OnChanges {
	@Input() pokemon: any;

	public images: Array<PokemonImage> = [];
	public selectedIndex: number = 0;

	constructor(public poke: PokemonService) {}

	ngOnChanges(): void {
		this.loadPokemonImageData();
	}

	public loadPokemonImageData(): void {
		this.images = [];

		if (this.pokemon.sprites.front_default) {
			this.images.push({
				source: this.pokemon.sprites.front_default,
				alt: '',
			});
		}

		if (this.pokemon.sprites.front_shiny) {
			this.images.push({
				source: this.pokemon.sprites.front_shiny,
				alt: '',
			});
		}
	}

	public selectImage(index: number): void {
		this.selectedIndex = index;
	}

	public onPreviousClick(): void {
		if (this.selectedIndex === 0) {
			this.selectedIndex = this.images.length - 1;
		} else {
			this.selectedIndex--;
		}
	}

	public onNextClick(): void {
		if (this.selectedIndex === this.images.length - 1) {
			this.selectedIndex = 0;
		} else {
			this.selectedIndex++;
		}
	}
}
