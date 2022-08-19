import { Component, Input, OnInit } from '@angular/core';
import { HttpService, PokemonService } from 'src/app/services';

@Component({
  selector: 'app-pokemon-image-card',
  templateUrl: './pokemon-image-card.component.html',
  styleUrls: ['./pokemon-image-card.component.scss']
})
export class PokemonImageCardComponent implements OnInit {

  @Input() pokemon: any;

  form: any;

  images: any[] = [];
  selectedIndex: number = 0;

  constructor(
    private http: HttpService,
    public poke: PokemonService
  ) { }

  ngOnInit(): void {
    this.http.getPokemonForm(this.pokemon.forms[0].name as string).subscribe(
      (form) => {
        this.form = form
        
        if (form.sprites.front_default) {
          this.images.push({src: form.sprites.front_default, alt: ''});
        }

        if (form.sprites.front_shiny) {
          this.images.push({src: form.sprites.front_shiny, alt: ''});
        }

      }
    )
  }

  formatPokemonName(pokemon: string): string {
    return pokemon.replace(/-/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));;
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