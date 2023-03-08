import { Component, Input, OnChanges} from '@angular/core';
import { PokemonService } from 'src/app/services';

@Component({
  selector: 'app-pokemon-statistics-card',
  templateUrl: './pokemon-statistics-card.component.html',
  styleUrls: ['./pokemon-statistics-card.component.scss']
})
export class PokemonStatisticsCardComponent implements OnChanges {

  @Input() pokemon: any;

  stats: any[] = [];
  total: number = 0;

  constructor(public poke: PokemonService) { }

  ngOnChanges(): void {
    this.loadPokemonStatistics();
  }


  public loadPokemonStatistics(): void {
    this.total = 0;
    this.stats = this.pokemon.stats.map((stat: any) => {
      this.total += Number(stat.base_stat);
      return {
        name: this.getFormatStats(stat.stat.name),
        base_stats: stat.base_stat,
        min: (stat.stat.name == 'hp') ? this.poke.getPokemonHPStat(stat.base_stat, 100)  : this.poke.getPokemonOthersStats(false, stat.base_stat, 100),
        max: (stat.stat.name == 'hp') ? this.poke.getPokemonHPStat(stat.base_stat, 100, 31, 255)  : this.poke.getPokemonOthersStats(true, stat.base_stat, 100, 31, 255),
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
