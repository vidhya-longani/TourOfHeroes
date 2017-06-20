import { Component, Input } from '@angular/core';
import { Country} from './country';

@Component({
  selector: 'app-country',
  template: `<div *ngIf="country" class="float-left">
				<h2>{{country.name}} details!</h2>
				<div><label>id: </label>{{country.id}}</div>
				<div>
				    <label>name: </label>
				    <input [(ngModel)]="country.name" placeholder="name"/>
				</div>
			</div>`,
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
	@Input() country : Country;
}
