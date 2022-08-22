import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-pokemon-statistics-card',
  templateUrl: './pokemon-statistics-card.component.html',
  styleUrls: ['./pokemon-statistics-card.component.scss']
})
export class PokemonStatisticsCardComponent implements OnInit {

  @Input() pokemon: any;

  stats: any[] = [];

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.stats = this.pokemon.stats.map((stat: any) => {
      return {
        name: this.getFormatStats(stat.stat.name),
        base_stats: stat.base_stat
      }
    });
  }

  getFormatStats(name: string): string {
    switch (name) {
      case 'special-attack':
        return 'Sp. Atk';
      case 'special-defense':
        return 'Sp. Def';
      default:
        return name.replace(/-/g, ' ').replace(/\w\S*/g, (w: any) => (w.replace(/^\w/, (c: any) => c.toUpperCase())));
    }
  }

}
