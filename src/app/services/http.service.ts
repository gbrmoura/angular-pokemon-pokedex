import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) { }

	private handleError<T>(operation = 'operation', result?: T): any {
		return (error: any): Observable<T> => {
			console.error(`${operation} failed: ${error.message}`);
			return of(result as T);
		}
	}

	public getID(url: string): string | number {
		const splitedUrl = url.split('pokeapi.co')[1].split('/').filter(r => r !== '');
		return splitedUrl[splitedUrl.length - 1];
	}

	public getPokemon(pokemon: string): Observable<any> {
		return this.http.get<any>(`${environment.url}pokemon/${pokemon}`).pipe(
			catchError(this.handleError('getPokemon'))
		);
	}

	public getPokemonForm(pokemon: string): Observable<any> {
		return this.http.get<any>(`${environment.url}pokemon-form/${pokemon}`).pipe(
			catchError(this.handleError('getPokemonForm'))
		);
	}

	public getPokemonSpecies(pokemon: string): Observable<any> {
		return this.http.get<any>(`${environment.url}pokemon-species/${pokemon}`).pipe(
			catchError(this.handleError('getPokemonSpecies'))
		)
	}

	public getTypes(): Observable<any> {
		return this.http.get<any>(`${environment.url}type`).pipe(
			catchError(this.handleError('getTypes'))
		)
	}

	public getPokemonTypes(type: string): Observable<any> {
		return this.http.get<any>(`${environment.url}type/${type}`).pipe(
			catchError(this.handleError('getPokemonTypes'))
		)
	}

	public getPokemonEvolutionChain(pokemon: string | number): Observable<any> {
		return this.http.get<any>(`${environment.url}evolution-chain/${pokemon}`).pipe(
			catchError(this.handleError('getPokemonEvolutionChain'))
		)
	}

	public getPokemons(limit: number, offset: number): Observable<any> {
		return this.http.get<any>(`${environment.url}pokemon`, {
			params: new HttpParams()
				.set('limit', limit)
				.set('offset', offset)
		}).pipe(
			catchError(this.handleError('getPokemons'))
		)
	}
}
