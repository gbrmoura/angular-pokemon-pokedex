import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  private log(message: any): void {
    console.log(`${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
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
