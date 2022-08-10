import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from 'src/app/global.module';
import { PokemonComponent } from './pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    GlobalModule
  ]
})
export class PokemonModule { }
