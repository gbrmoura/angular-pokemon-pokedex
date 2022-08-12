import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const pokemon = String(this.route.snapshot.paramMap.get('id'));
  }

}
