import { Component, Input, OnChanges } from '@angular/core';
import { HttpService, PokemonService } from 'src/app/services';

import { tap, concat,  } from 'rxjs';
import { switchMap, toArray, map } from 'rxjs/operators';
import { PokemonTypeChart } from 'src/app/interfaces';

@Component({
  selector: 'app-pokemon-typechart-card',
  templateUrl: './pokemon-typechart-card.component.html',
  styleUrls: ['./pokemon-typechart-card.component.scss']
})
export class PokemonTypechartCardComponent {

  @Input() pokemonData: any;
  @Input() pokemonTypeData: any;

  constructor(public pokemonService: PokemonService) { }

  public getClassByDamage(damage: number): string {
    switch(damage) {
      case 0.25:
        return 'not-realy-effective';
      case 0.5:
        return 'not-very-effective';
      case 0:
        return 'no-effect';
      case 2:
        return 'super-effective';
      case 4:
        return 'mega-effective';
      default:
        return '';
    }
  }

}
