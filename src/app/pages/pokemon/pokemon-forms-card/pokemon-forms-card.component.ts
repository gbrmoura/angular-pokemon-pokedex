import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-forms-card',
  templateUrl: './pokemon-forms-card.component.html',
  styleUrls: ['./pokemon-forms-card.component.scss']
})
export class PokemonFormsCardComponent implements OnInit {

  @Input() pokemon: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
