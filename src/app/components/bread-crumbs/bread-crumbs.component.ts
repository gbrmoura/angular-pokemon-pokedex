import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PokemonFormattingService } from 'src/app/services';
import { BreadCrumb } from '../../interfaces';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
})
export class BreadCrumbsComponent implements OnInit {

  public breadcrumbs: BreadCrumb[] = [];

  constructor(
    private route: Router,
    private format: PokemonFormattingService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.events.pipe(
      filter((event)=> event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe((event) => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute);
    })
  }

  buildBreadCrumb(router: ActivatedRoute): BreadCrumb[] {
    const route = router.firstChild;
    const path = route?.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    const urls = path?.split('/').filter(rec => rec);

    return urls?.map<BreadCrumb>((rec, index )=>  {

      let label: string = this.format.getFormattedPokemonName(rec);
      let url: string = urls.filter((u, i)=> i <= index).join('/');

      if (rec.startsWith(':') && !!router.snapshot) {
        const paramName = rec.split(':')[1];
        url = url?.replace(rec as string, route?.snapshot.params[paramName as string]) as string;
        label = route?.snapshot.params[paramName as string];
        label = this.format.getFormattedPokemonName(label);
      }

      return { label: label, url: url };
    }) ?? [];
  }
}
