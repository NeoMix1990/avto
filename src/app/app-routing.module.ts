import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AvtocardComponent } from './avtocard/avtocard.component';
import { DrivercardComponent } from './drivercard/drivercard.component';




const routes: Routes = [
	{ path: '', redirectTo: 'avtocard', pathMatch: 'full' },
	{ path: 'avtocard', component: AvtocardComponent },
	{ path: 'drivercard', component: DrivercardComponent }
];

@NgModule({
  imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
