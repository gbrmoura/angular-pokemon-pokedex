import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services';

@Component({
	selector: 'app-pokemon-evolution-card',
	templateUrl: './pokemon-evolution-card.component.html',
	styleUrls: ['./pokemon-evolution-card.component.scss'],
})
export class PokemonEvolutionCardComponent implements OnInit {
	@Input() pokemon: any;
	@Input() species: any;

	public evolutionChain: any;

	constructor(private http: HttpService) {}

	ngOnInit(): void {
		const evolutionChainId = this.getID(this.species.evolution_chain.url);
		this.http.getPokemonEvolutionChain(evolutionChainId).subscribe({
			next: (pokemons) => {
				this.evolutionChain = pokemons;
			},
		});
	}

	public isEvolutionAvailable(): boolean {
		return this.evolutionChain.chain.evolves_to.length !== 0;
	}

	public getID(url: string): string | number {
		const splitedUrl = url
			.split('pokeapi.co')[1]
			.split('/')
			.filter((r) => r !== '');
		return splitedUrl[splitedUrl.length - 1];
	}
}
