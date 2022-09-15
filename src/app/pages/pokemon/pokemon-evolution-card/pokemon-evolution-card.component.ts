import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-evolution-card',
  templateUrl: './pokemon-evolution-card.component.html',
  styleUrls: ['./pokemon-evolution-card.component.scss']
})
export class PokemonEvolutionCardComponent implements OnInit {

  @Input() pokemon: any;
  @Input() species: any; 

  constructor() { }

  ngOnInit(): void {
    // this.getPokemonEvolutionChainId(this.species.evolution_chain.url);
  
  }

  private getPokemonEvolutionChainId(url: string): string {
    const splitedUrl = url.split('pokeapi.co')[1].split('/').filter(r => r !== '');
    const evolutionChainId = splitedUrl[splitedUrl.length - 1];
    return evolutionChainId;
  }

}
