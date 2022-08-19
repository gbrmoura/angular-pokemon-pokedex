import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-pokemon-statistics-card',
  templateUrl: './pokemon-statistics-card.component.html',
  styleUrls: ['./pokemon-statistics-card.component.scss']
})
export class PokemonStatisticsCardComponent implements OnInit {

  @Input() stats: any = {};

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    
  }

}
