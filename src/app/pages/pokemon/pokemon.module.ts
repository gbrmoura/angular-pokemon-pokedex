import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from 'src/app/global.module';
import { PokemonComponent } from './pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { PokemonImageCardComponent } from './pokemon-image-card/pokemon-image-card.component';
import { PokemonStatisticsCardComponent } from './pokemon-statistics-card/pokemon-statistics-card.component';
import { PokemonEvolutionCardComponent } from './pokemon-evolution-card/pokemon-evolution-card.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonImageCardComponent,
    PokemonStatisticsCardComponent,
    PokemonEvolutionCardComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    GlobalModule,
    LoaderModule
  ]
})
export class PokemonModule { }
