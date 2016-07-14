import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroesComponent }     from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroService }         from './hero/hero.service';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
//  directives: [ROUTER_DIRECTIVES, AlertComponent],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
  ]
})
@RouteConfig([
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
  { path: '/heroes', name: 'Heroes', component: HeroesComponent }
])
export class AppComponent {
  title = 'Tour of Heroes';
}
