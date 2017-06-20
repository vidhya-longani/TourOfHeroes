import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountryDetailComponent } from './country/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
	    {
	    	path: 'countries',
	    	component: CountryComponent
	    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
