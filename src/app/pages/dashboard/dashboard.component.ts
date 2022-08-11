import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  services: any[] = [];

  constructor(
    private htpp: HttpService
  ) { }

  ngOnInit(): void {
    this.services = this.getServices();
  }


  getServices(): any[] {
    return [
      {
        name: 'Pokemons',
        link: '/dashboard/pokemons',
        pokebol: {
          color1: '#ff3534',
          color2: '#ffffff'
        }
      }
    ];
  }

}
