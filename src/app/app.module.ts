import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountryDetailComponent } from './country/country-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryService } from './country/country.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
	    {
	    	path: 'countries',
	    	component: CountryComponent
	    },
	    {
	    	path: 'dashboard',
	    	component: DashboardComponent
	    },
	    {
		  path: 'detail/:id',
		  component: CountryDetailComponent
		},
	    {
		  path: '',
		  redirectTo: '/dashboard',
		  pathMatch: 'full'
		}
    ])
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
