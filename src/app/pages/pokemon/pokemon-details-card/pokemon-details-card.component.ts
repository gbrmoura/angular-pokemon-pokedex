import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-pokemon-details-card',
  templateUrl: './pokemon-details-card.component.html',
  styleUrls: ['./pokemon-details-card.component.scss']
})
export class PokemonDetailsCardComponent implements OnInit {

  @Input() pokemon: any;
  @Input() specie: any;

  species: string = '';
  height: string = ''; 
  weight: string = '';
  abilities: string = '';

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    const height = String(this.pokemon.height);
    const weight = String(this.pokemon.weight);
    
    // put zero on the begin
    let sliceHeight = this.slice(height, height.length - 1, '.');
    let sliceWeight = this.slice(weight, weight.length - 1, '.');


    this.species = this.specie.genera.find((rec: any) => rec.language.name === 'en').genus;
    this.height = `${ sliceHeight } m`;
    this.weight = `${ sliceWeight } kg`;
    this.abilities = this.pokemon.abilities.map((rec: any) => {
      return `${rec.ability.name}${(rec.is_hidden ? ' (hidden)' : '')}`;
    }).join(', ');
  }

  
  public slice(text: string, position: number, inc: string): string {
    return text.slice(0, position) + inc + text.slice(position);
  }

}
