import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  isLoading: boolean = false;

  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    const id = String(this.route.snapshot.paramMap.get('pokemon'));
    this.http.getPokemon(id as string).subscribe((pokemon) => {
      this.pokemon = pokemon;
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

}
