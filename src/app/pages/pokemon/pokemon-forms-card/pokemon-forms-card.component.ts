import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-pokemon-forms-card',
  templateUrl: './pokemon-forms-card.component.html',
  styleUrls: ['./pokemon-forms-card.component.scss']
})
export class PokemonFormsCardComponent implements OnChanges {

  @Input() pokemon: any;
  @Input() species: any;

  public varieties: any;

  constructor(private http: HttpService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.varieties = this.getPokemonVarieties(this.species);
  }

  private getPokemonVarieties(species: any): any[] {
    return species.varieties.map((varietie: any) => {

      if (varietie.is_default) {
        return null;
      }

      let id = this.http.getID(varietie.pokemon.url);

      return {
        name: varietie.pokemon.name,
        id: id,
      }

    }).filter((v: any) => v != null);
  }

}
