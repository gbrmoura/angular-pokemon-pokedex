import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'pokemons',
		data: { breadcrumb: 'Pokemons' },
		loadChildren: () =>
			import('./pages/pokemons/pokemons.module').then((m) => m.PokemonsModule),
	},
	{
		path: 'pokemons/:pokemon',
		data: { breadcrumb: '' },
		loadChildren: () => import('./pages/pokemon/pokemon.module').then((m) => m.PokemonModule),
	},

	// ? default route
	{
		path: '',
		redirectTo: '/pokemons',
		pathMatch: 'full',
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
