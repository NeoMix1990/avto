import { Component, OnInit, Inject } from '@angular/core';
import { DriverService } from '../driverservice/driver.service';
import { NgForm } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatDialogRef } from '@angular/material';
import { DrivercardComponent } from '../drivercard.component';
import { DriverpreviewComponent } from '../driverpreview/driverpreview.component'
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
	selector: 'app-driverform',
	templateUrl: './driverform.component.html',
	styleUrls: ['./driverform.component.css']
})
export class DriverformComponent implements OnInit {

	constructor(private driverService: DriverService, public dialogRef: MatDialogRef<DrivercardComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		this.driverService.getDataDriver();
		this.resetForm();
	}

	onSubmit(driverForm: NgForm) {
		if (driverForm.value.$id == null)
			this.driverService.insertDriver(driverForm.value);
		else
			this.driverService.updateDriver(driverForm.value);
		this.resetForm(driverForm);
	}

	onNoClick(): void {
		this.resetForm();
	}

	resetForm(driverForm?: NgForm) {
		if (driverForm != null)
			driverForm.reset();
		this.driverService.selectedDriver = {
			choose: false,
			$id: null,
			// photo: '',
			surname: '',
			name: '',
			lastname: '',
			birthday: '',
			// gender: '',
			// passportserries: '',
			// pasportnumber: '',
			// datetake: '',
			// whotake: '',
			// addressreg: '',
			// addresslive: '',
			// phone: '',
			// auto: '',
			status: '',
			money: '',
			nikname: ''
		}
	}

}
