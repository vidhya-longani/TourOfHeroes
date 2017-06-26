import { Component, OnInit } from '@angular/core';
import { Country} from './country';
import { CountryService} from './country.service';
import { Router}   from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl:'./country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {

  	countries : Country[];
	selectedCountry : Country;

	constructor(private countryService : CountryService, private router: Router){

	}

	getCountryList() {
		this.countryService.getCountries().
			then(countries => this.countries = countries);
	}

	ngOnInit() {
		this.getCountryList();
	}

	onSelect(country: Country){
		this.selectedCountry = country;
	}

	gotoDetail(){
		this.router.navigate(['/detail',this.selectedCountry.id]);
	}
}
