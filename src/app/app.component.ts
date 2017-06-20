import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  			<nav>
			     <a routerLink="/dashboard">Dashboard</a>
			     <a routerLink="/countries">Countries</a>
			</nav>
  			<router-outlet></router-outlet>`,
})

export class AppComponent {
	title = 'World Tour';
}