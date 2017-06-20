import { Injectable } from '@angular/core';
import { COUNTRY } from './mock-countries';
import { Country} from './country';

@Injectable()
export class CountryService {

	getCountries() : Promise<Country[]>{
		return Promise.resolve(COUNTRY);
	}
}
