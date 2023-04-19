import { Injectable } from '@angular/core';
import { transformMenu } from '@angular/material/menu';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor() {}

  /**
   * It should return the pokemon type hexa color
   * @param {string} type: the pokemon type
   * @returns {string} hexadecimal color
   */
	public getPokemonTypeColor(type: string): string {
		switch (type) {
			case 'normal':
				return '#a8a878';
			case 'fighting':
				return '#c03028';
			case 'flying':
				return '#a890f0';
			case 'poison':
				return '#a040a0';
			case 'ground':
				return '#e0c068';
			case 'rock':
				return '#b8a038';
			case 'bug':
				return '#a8b820';
			case 'fire':
				return '#f08030';
			case 'water':
				return '#6890f0';
			case 'grass':
				return '#78c850';
			case 'electric':
				return '#f8d030';
			case 'psychic':
				return '#f85888';
			case 'ice':
				return '#98d8d8';
			case 'dragon':
				return '#7038f8';
			case 'ghost':
				return '#705898';
			case 'dark':
				return '#705848';
			case 'steel':
				return '#b8b8d0';
			case 'fairy':
				return '#f39aae';
			default:
				return '#EB5757';
		}
	}

	/**
	 * Calcule the hp stat of pokemon
	 * @param {number} base the base stat
	 * @param {number} level the level of pokemon
	 * @param {number} iv the IV's of pokemon
	 * @param {number} ev the EV's of pokemon
	 * @returns the value of the stat
	 */
	public getPokemonHPStat(base: number, level: number, iv: number = 0, ev: number = 0): number {
		return Math.floor(0.01 * (2 * base + iv + Math.floor(0.25 * ev)) * level) + level + 10;
	}

	/**
	 * Calcule the others stats of pokemons
	 * @param {boolean} nature if the pokemon has the best nature
	 * @param {number} base the base value of stat
	 * @param {number} level the level of pokemon
	 * @param {number} iv the IV's of pokemon
	 * @param {number} ev the EV's of pokemon
	 * @returns the value of stat
	 */
	public getPokemonOthersStats(nature: boolean, base: number, level: number, iv: number = 0, ev: number = 0): number {
		return Math.floor(((((2 * base + iv + Math.floor(ev * 0.25)) * level) / 100) + 5) * (nature ? 1.1 : 0.9));
	}

}
