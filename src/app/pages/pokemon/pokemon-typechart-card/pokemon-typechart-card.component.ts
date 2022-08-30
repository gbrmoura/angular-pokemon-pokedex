import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-typechart-card',
  templateUrl: './pokemon-typechart-card.component.html',
  styleUrls: ['./pokemon-typechart-card.component.scss']
})
export class PokemonTypechartCardComponent implements OnInit {

  @Input() pokemon: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
