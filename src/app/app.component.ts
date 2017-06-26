import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  			<nav>
			     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
			     <a routerLink="/countries" routerLinkActive="active">Countries</a>
			</nav>
  			<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'World Tour';
}