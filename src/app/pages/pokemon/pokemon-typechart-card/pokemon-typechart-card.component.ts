import { Component, Input, OnInit } from '@angular/core';
import { HttpService, PokemonFormattingService, PokemonService } from 'src/app/services';

import { tap, concat,  } from 'rxjs';
import { switchMap, toArray, map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-typechart-card',
  templateUrl: './pokemon-typechart-card.component.html',
  styleUrls: ['./pokemon-typechart-card.component.scss']
})
export class PokemonTypechartCardComponent implements OnInit {

  @Input() pokemon: any;

  types: any[] = [];
  damaged: any[] = [];


  constructor(private http: HttpService, public poke: PokemonService) { }

  ngOnInit(): void {
    
    this.http.getTypes().pipe(
      switchMap((types) => {
        return concat(
          ...this.pokemon.types.map((type: any) => {
            return this.http.getPokemonTypes(type.type.name).pipe(
              map((pokemonType) => {
                
                const damaged: any[] = []

                pokemonType.damage_relations.double_damage_from.map((db: any) => {
                  damaged.push({type: db.name, damage: 2});
                })
                
                pokemonType.damage_relations.half_damage_from.map((hf: any) => {
                  damaged.push({type: hf.name, damage: 0.5});
                })

                pokemonType.damage_relations.no_damage_from.map((no: any) => {
                  damaged.push({type: no.name, damage: 0});
                })

                return damaged;
              })
            )
          })
        ).pipe(
          toArray(), 
          map((damagedTypes: any) => {
            return types.results.map((t: any) => {
              const filterDamaged = [...damagedTypes[0], ...damagedTypes[1]].filter((e) => e.type == t.name);
              let x = filterDamaged.length <= 0 ? 1 : filterDamaged.reduce((a, b) => {
                a.damage *= b.damage;
                return a;
              }).damage;

              return {name: t.name, damage: x};
            });
          }),
          map((finalDamagedTypes) => {
            return {types: types.results, damaged: finalDamagedTypes}
          })
        )
      })
    ).subscribe((e) => {
      this.types = e.types;
      this.damaged = e.damaged;
    })

  }

}
