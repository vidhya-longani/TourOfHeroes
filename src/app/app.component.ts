import { Component } from '@angular/core';
import { CountryModule } from './country/country.module';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  			<h2>{{country.name}} details!</h2>
  			<div><label>id: </label>{{country.id}}</div>
			<div><label>name: </label><input [(ngModel)]="country.name" placeholder="name"></div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World Tour';
  country : CountryModule = {
  	id : 1,
  	name : 'India'
  }
}
