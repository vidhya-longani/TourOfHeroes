import { Injectable } from '@angular/core';
import { COUNTRY } from './mock-countries';
import { Country} from './country';

@Injectable()
export class CountryService {

	getCountries() : Promise<Country[]>{
		return Promise.resolve(COUNTRY);
	}

	getCountry(id : number) : Promise<Country>{
		return this.getCountries().then(countries => countries.find(
			country => country.id === id)
		);
	}
}
