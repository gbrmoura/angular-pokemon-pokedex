import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonService } from 'src/app/services';

@Component({
  selector: 'app-pokemon-image-card',
  templateUrl: './pokemon-image-card.component.html',
  styleUrls: ['./pokemon-image-card.component.scss']
})
export class PokemonImageCardComponent implements OnChanges {

  @Input() pokemon: any;

  images: any[] = [];
  selectedIndex: number = 0;

  constructor(public poke: PokemonService) { }

  ngOnChanges(): void {
    this.loadPokemonImageData();
  }

  public loadPokemonImageData(): void {
    this.images = [];

    if (this.pokemon.sprites.front_default) {
      this.images.push({src: this.pokemon.sprites.front_default, alt: ''});
    }

    if (this.pokemon.sprites.front_shiny) {
      this.images.push({src: this.pokemon.sprites.front_shiny, alt: ''});
    }
  }

  selectImage(i: number): void {
    this.selectedIndex = i;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
