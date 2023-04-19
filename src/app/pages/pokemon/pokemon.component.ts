import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, concat, map, of, switchMap, tap, toArray, zip } from 'rxjs';
import { PokemonTypeDamage } from 'src/app/interfaces';
import { HttpService } from 'src/app/services';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
	public isLoading: boolean = false;

	constructor(
		private route: ActivatedRoute,
		private httpService: HttpService,
		private activeRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.activeRoute.params.subscribe((routeParams) => {
			this.loadPokemonData();
		});
	}

	public pokemonMainData: any = null;
	public pokemonSpecieData: any = null;
	public pokemonFormData: any = null;
	public pokemonEvolutionChainData: any = null;
	public pokemonTypeChartData: any = null;

	// dados dos form
	// dados das evoluções

	public loadPokemonData(): void {
		this.isLoading = true;
		const pokemonId = this.getPokemonId();

		this.httpService
			.getPokemon(pokemonId)
			.pipe(
				switchMap((pokemonMainData) => {
					return zip([
						of(pokemonMainData),
						this.httpService.getPokemonSpecies(pokemonId),
					]);
				}),
				switchMap(([pokemonMainData, pokemonSpecieData]) => {
					return zip([
						of(pokemonMainData),
						of(pokemonSpecieData),
						this.httpService.getPokemonForm(pokemonId),
						this.httpService.getPokemonEvolutionChain(
							this.httpService.getID(pokemonSpecieData.evolution_chain.url)
						),
						this.getPokemonTypeChartData(pokemonMainData),
					]);
				})
			)
			.subscribe({
				next: ([
					pokemonMainData,
					pokemonSpecieData,
					pokemonFormData,
					pokemonEvolutionChainData,
					pokemonTypeChartData,
				]) => {
					this.pokemonMainData = pokemonMainData;
					this.pokemonSpecieData = pokemonSpecieData;
					this.pokemonFormData = pokemonFormData;
					this.pokemonEvolutionChainData = pokemonEvolutionChainData;
					this.pokemonTypeChartData = pokemonTypeChartData;

					this.isLoading = false;
				},
			});
	}

	public getPokemonTypeChartData(pokemonData: any): Observable<any> {
		return this.httpService.getTypes().pipe(
			switchMap((pokemonTypesData) => {
				return concat(
					...pokemonData.types.map((typeData: any) => {
						return this.httpService.getPokemonTypes(typeData.type.name).pipe(
							map((pokemonType) => {
								const damaged: Array<PokemonTypeDamage> = [];

								pokemonType.damage_relations.double_damage_from.map(
									(doubleDamage: any) => {
										damaged.push({ type: doubleDamage.name, damage: 2 });
									}
								);

								pokemonType.damage_relations.half_damage_from.map(
									(halfDamage: any) => {
										damaged.push({ type: halfDamage.name, damage: 0.5 });
									}
								);

								pokemonType.damage_relations.no_damage_from.map((noDamage: any) => {
									damaged.push({ type: noDamage.name, damage: 0 });
								});

								return damaged;
							})
						);
					})
				).pipe(
					toArray(),
					map((damagedTypes: any) => {
						return pokemonTypesData.results.map((result: any) => {
							let filterDamaged = damagedTypes[0].filter(
								(e: any) => e.type == result.name
							);

							if (damagedTypes.length >= 2) {
								filterDamaged = [...filterDamaged, ...damagedTypes[1]].filter(
									(e) => e.type == result.name
								);
							}

							let finalDamageTakenByType =
								filterDamaged.length <= 0
									? 1
									: filterDamaged.reduce((a: any, b: any) => {
											a.damage *= b.damage;
											return a;
									  }).damage;

							return { name: result.name, damage: finalDamageTakenByType };
						});
					}),
					map((finalDamagedTypes) => {
						const finalTypes = pokemonTypesData.results.map((e: any) => {
							return { name: e.name, description: e.name.substr(0, 3) };
						});

						return {
							PokemonTypesData: finalTypes,
							PokemonTypesDamagedData: finalDamagedTypes,
						};
					})
				);
			})
		);
	}

	public getPokemonId(): string {
		return String(this.route.snapshot.paramMap.get('pokemon')) || '';
	}
}
