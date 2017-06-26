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

	add(name: string): void {
	  name = name.trim();
	  if (!name) { return; }
	  this.countryService.create(name)
	    .then(hero => {
	      this.countries.push(hero);
	      this.selectedCountry = null;
	    });
	}

	delete(country: Country): void {
  	  this.countryService.delete(country.id)
      .then(() => {
        this.countries = this.countries.filter(h => h !== country);
        if (this.selectedCountry === country) { this.selectedCountry = null; }
      });
	}
}
