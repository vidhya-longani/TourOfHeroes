import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';
import { Country} from './country';
import { CountryService} from './country.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-country-detail',
  template: `<div *ngIf="country" class="float-left">
				<h2>{{country.name}} details!</h2>
				<div><label>id: </label>{{country.id}}</div>
				<div>
				    <label>name: </label>
				    <input [(ngModel)]="country.name" placeholder="name"/>
				</div>
				 <button (click)="goBack()">Back</button>
			</div>`,
  styleUrls: ['./country.component.css']
})

export class CountryDetailComponent implements OnInit {
	@Input() country : Country;

	constructor(
		private countryService : CountryService,
		private location : Location,
		private route : ActivatedRoute
	){

	}

	ngOnInit(){

		this.route.params.
			switchMap((params :Params) => 
				this.countryService.getCountry(+params['id'])).
			subscribe(
				country => this.country = country
			);
	}

	goBack(){
		this.location.back();
	}
}
