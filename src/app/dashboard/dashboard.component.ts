import { Component, OnInit } from '@angular/core';
import { Country} from '../country/country';
import { CountryService} from '../country/country.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	countries : Country[];

  	constructor(private countryService : CountryService) { }

  	ngOnInit() {
  	 	this.countryService.getCountries()
      	.then(countries => this.countries = countries.slice(1, 5));
  	}
}
