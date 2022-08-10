import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { breadcrumb: 'Dashboard' },
  },
  {
    path: 'dashboard/pokemons',
    data: { breadcrumb: 'Pokemons' },
    loadChildren:() => import('./pages/pokemons/pokemons.module').then(m => m.PokemonsModule),
  },
  {
    path: 'dashboard/pokemons/:pokemon',
    data: { breadcrumb: ''},
    loadChildren:() => import('./pages/pokemon/pokemon.module').then(m => m.PokemonModule),
  },

  // ? default route
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
