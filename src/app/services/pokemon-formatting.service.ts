import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonFormattingService {

  constructor() { }

  /**
   * This function should receive a unformatted text and 
   * return a formatted text with pokemon name base
   * @param {string} text 
   * @returns {string} return the formatted text
   */
  getFormattedPokemonName(text: string = ''): string {
    return text.replace(/-/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  }

}
