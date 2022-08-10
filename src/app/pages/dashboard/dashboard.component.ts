import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    private htpp: HttpService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.htpp.getPokemons(1, 0, '').subscribe(
      (data) => this.pokemons = data.results
    )
  }

}
