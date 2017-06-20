import { Component } from '@angular/core';
import { CountryComponent } from './country/country.component';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  			<app-country></app-country>`,
})

export class AppComponent {
	title = 'World Tour';
}