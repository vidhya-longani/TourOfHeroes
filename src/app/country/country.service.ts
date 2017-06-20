import { Injectable } from '@angular/core';
import { COUNTRY } from './mock-countries';

@Injectable()
export class CountryService {

	getCountries(){
		return COUNTRY;
	}
}
