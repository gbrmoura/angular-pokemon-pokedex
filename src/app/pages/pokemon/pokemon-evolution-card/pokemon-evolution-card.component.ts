import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-evolution-card',
  templateUrl: './pokemon-evolution-card.component.html',
  styleUrls: ['./pokemon-evolution-card.component.scss']
})
export class PokemonEvolutionCardComponent implements OnInit {

  @Input() pokemon: any;

  constructor() { }

  ngOnInit(): void {
  }

}
