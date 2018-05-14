import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { AvtocardComponent } from './avtocard/avtocard.component';
import { DrivercardComponent } from './drivercard/drivercard.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { DriverlistComponent } from './drivercard/driverlist/driverlist.component';
import { DriverpreviewComponent } from './drivercard/driverpreview/driverpreview.component';
import { DriverformComponent } from './drivercard/driverform/driverform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvtoService } from './avtocard/avtoservice/avto.service';
import { DriverService } from './drivercard/driverservice/driver.service';
import { MatTableModule, MatIconModule, MatDialogModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTableModule } from '@angular/cdk/table';
import { DrivereditComponent } from './drivercard/driverpreview/driveredit/driveredit.component';


@NgModule({
	declarations: [
		AppComponent,
		AvtocardComponent,
		DrivercardComponent,
		DriverlistComponent,
		DriverpreviewComponent,
		DriverformComponent,
		DrivereditComponent,
	],
	entryComponents: [
		DriverformComponent,
		DriverlistComponent
  ],
	imports: [
		BrowserModule,
		NgbModule.forRoot(),
		BrowserAnimationsModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireDatabaseModule,
		FormsModule,
		CdkTableModule,
		ReactiveFormsModule,
		MatTableModule,
		MatIconModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule
	],
	providers: [DriverService, AvtoService],
	bootstrap: [AppComponent]
})
export class AppModule { }
