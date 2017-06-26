import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './country/country.component';
import { CountryDetailComponent } from './country/country-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
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
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
