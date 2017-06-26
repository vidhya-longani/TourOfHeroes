import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Country} from './country';

@Injectable()
export class CountryService {

	private countriesUrl = 'api/countries';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getCountries() : Promise<Country[]>{
		return this.http.get(this.countriesUrl)
             .toPromise()
             .then(response => response.json().data as Country[])
             .catch(this.handleError);
	}

	getCountry(id : number) : Promise<Country>{
		const url = `${this.countriesUrl}/${id}`;
  		return this.http.get(url)
			    .toPromise()
			    .then(response => response.json().data as Country)
			    .catch(this.handleError);
				}

	private handleError(error: any): Promise<any> {
	  	console.error('An error occurred', error); // for demo purposes only
	  	return Promise.reject(error.message || error);
	}

	update(country: Country): Promise<Country> {
	  const url = `${this.countriesUrl}/${country.id}`;
	  return this.http
	    .put(url, JSON.stringify(country), {headers: this.headers})
	    .toPromise()
	    .then(() => country)
	    .catch(this.handleError);
	}
}
