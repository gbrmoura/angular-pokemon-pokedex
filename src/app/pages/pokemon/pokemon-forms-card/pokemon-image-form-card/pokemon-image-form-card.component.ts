import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-pokemon-image-form-card',
  templateUrl: './pokemon-image-form-card.component.html',
  styleUrls: ['./pokemon-image-form-card.component.scss']
})
export class PokemonImageFormCardComponent implements OnInit {

  @Input() pokemon: any;
  @Input() species: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {

  }

  private getPokemonVarieties(species: any): any[] {
    // todo:
    if (species && species.varieties) {
      return species.varieties.map((vtr: any) => {

      }).filter((vtr: any) => vtr !== null)
    }


    return [];
  }

}
