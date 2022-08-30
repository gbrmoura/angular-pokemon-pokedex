import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from 'src/app/global.module';
import { PokemonComponent } from './pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { PokemonImageCardComponent } from './pokemon-image-card/pokemon-image-card.component';
import { PokemonStatisticsCardComponent } from './pokemon-statistics-card/pokemon-statistics-card.component';
import { PokemonEvolutionCardComponent } from './pokemon-evolution-card/pokemon-evolution-card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PokemonDetailsCardComponent } from './pokemon-details-card/pokemon-details-card.component';
import { PokemonFormsCardComponent } from './pokemon-forms-card/pokemon-forms-card.component';
import { PokemonTypechartCardComponent } from './pokemon-typechart-card/pokemon-typechart-card.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonImageCardComponent,
    PokemonStatisticsCardComponent,
    PokemonEvolutionCardComponent,
    PokemonDetailsCardComponent,
    PokemonFormsCardComponent,
    PokemonTypechartCardComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    GlobalModule,
    LoaderModule,
    PipesModule
  ]
})
export class PokemonModule { }
