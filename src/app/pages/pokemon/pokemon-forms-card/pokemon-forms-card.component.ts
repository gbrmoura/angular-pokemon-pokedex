import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-forms-card',
  templateUrl: './pokemon-forms-card.component.html',
  styleUrls: ['./pokemon-forms-card.component.scss']
})
export class PokemonFormsCardComponent implements OnInit {

  @Input() pokemon: any;
  @Input() species: any;
  
  constructor() { }

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
