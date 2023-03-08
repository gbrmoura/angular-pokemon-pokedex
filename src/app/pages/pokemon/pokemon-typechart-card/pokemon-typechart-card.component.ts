import { Component, Input, OnChanges } from '@angular/core';
import { HttpService, PokemonService } from 'src/app/services';

import { tap, concat,  } from 'rxjs';
import { switchMap, toArray, map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-typechart-card',
  templateUrl: './pokemon-typechart-card.component.html',
  styleUrls: ['./pokemon-typechart-card.component.scss']
})
export class PokemonTypechartCardComponent implements OnChanges {

  @Input() pokemon: any;

  types: any[] = [];
  damaged: any[] = [];


  constructor(private http: HttpService, public poke: PokemonService) { }

  ngOnChanges(): void {
    this.loadPokemonTypeChart();
  }


  public loadPokemonTypeChart(): void {
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

              let filterDamaged = damagedTypes[0].filter((e: any) => e.type == t.name);

              if (damagedTypes.length >= 2) {
                filterDamaged = [...filterDamaged, ...damagedTypes[1]].filter((e) => e.type == t.name)
              }

              let x = filterDamaged.length <= 0 ? 1 : filterDamaged.reduce((a: any, b: any) => {
                a.damage *= b.damage;
                return a;
              }).damage;

              return {name: t.name, damage: x};
            });
          }),
          map((finalDamagedTypes) => {
            const finalTypes = types.results.map((e: any) => {
              return {name: e.name, title: e.name.substr(0, 3)}
            })
            return {types: finalTypes, damaged: finalDamagedTypes}
          })
        )
      })
    ).subscribe((e) => {
      this.types = e.types;
      this.damaged = e.damaged;
    })
  }

  getClassByDamage(damage: number) {
    switch(damage) {
      case 0.25:
        return 'not-realy-effective';
      case 0.5:
        return 'not-very-effective';
      case 0:
        return 'no-effect';
      case 2:
        return 'super-effective';
      case 4:
        return 'mega-effective';
      default:
        return '';
    }
  }

}
