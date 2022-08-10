import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IBreadCrumb } from '../../interfaces';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
})
export class BreadCrumbsComponent implements OnInit {

  public breadcrumbs: IBreadCrumb[] = [];

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.events.pipe(
      filter((event)=> event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe((event) => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute);
    })
  }

  buildBreadCrumb(router: ActivatedRoute): IBreadCrumb[] {
    const route = router.firstChild;
    const path = route?.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    const urls = path?.split('/').filter(rec => rec);

    return urls?.map<IBreadCrumb>((rec, index )=>  {

      let label: string = rec.charAt(0).toUpperCase() + rec.slice(1);
      let url: string = urls.filter((u, i)=> i <= index).join('/');

      if (rec.startsWith(':') && !!router.snapshot) {
        const paramName = rec.split(':')[1];
        url = url?.replace(rec as string, route?.snapshot.params[paramName as string]) as string;
        label = route?.snapshot.params[paramName as string];
        label = label.charAt(0).toUpperCase() + label.slice(1)
      }

      return { label: label, url: url };
    }) ?? [];
  }
}
