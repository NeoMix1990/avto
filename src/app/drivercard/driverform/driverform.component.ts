import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { DriverService } from '../driverservice/driver.service';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DrivercardComponent } from '../drivercard.component';
import { DriverpreviewComponent } from '../driverpreview/driverpreview.component'
import { Driver } from '../driverservice/driver.model';
import { isNumber, padNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { NgbDateISOParserFormatter } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';

NgbDateISOParserFormatter.prototype.format = function (date) {
	return date ?
	(isNumber(date.day) ? padNumber(date.day) : '') + "." + (isNumber(date.month) ? padNumber(date.month) : '') + "." + date.year :
'';
};

@Component({
	selector: 'app-driverform',
	templateUrl: './driverform.component.html',
	styleUrls: ['./driverform.component.css']
})
export class DriverformComponent implements OnInit {
	driverList: Driver[] = [];

	clickMessage = '';

	constructor(private driverService: DriverService, public dialogRef: MatDialogRef<DriverformComponent>, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private cd: ChangeDetectorRef, private fb: FormBuilder) { }

	driverForm = this.fb.group({
		show: [ null, Validators.required],
		choose: [ null, Validators.required],
		$id: [ '' , Validators.required],
		foto: [ '', Validators.required],
		surname: [ '', Validators.required],
		name: [ '', Validators.required],
		lastname: [ '', Validators.required],
		birthday: [ null, Validators.required],
		gender: [ '', Validators.required],
		passportserries: ['',  Validators.required],
		pasportnumber: [ '', Validators.required],
		datetake: [ null, Validators.required],
		whotake: [ '', Validators.required],
		addressreg: [ '', Validators.required],
		addresslive: [ '', Validators.required],
		phone: [ '', Validators.required],
		auto: [ '', Validators.required],
		status: [ '', Validators.required],
		money: [ '', Validators.required],
		nikname: [ '', Validators.required]
	});
	
	ngOnInit() {
		this.driverService.getDataDriver();
		this.resetForm();
	}

	onFileChange(event) {
		const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [foto] = event.target.files;
      reader.readAsDataURL(foto);
  
      reader.onload = () => {
        this.driverForm.patchValue({
          foto: reader.result
			 });
				this.cd.markForCheck();

				this.data.driver.foto = this.driverForm.value.foto;
				console.log(this.data.driver.foto);
      };
    }
	}

	onSubmit(driverForm?: NgForm) {
		if (driverForm.value.$id == null) {
			this.driverService.insertDriver(driverForm.value);
		} else if (driverForm.value.$id == this.driverService.selectedDriver.$id) {
			this.driverService.updateDriver(driverForm.value);
		} else {
			this.driverService.updateDriver(driverForm.value);
		}
		this.resetForm(driverForm);
	}

	onNoClick() {
		this.dialogRef.close();
	}

	resetForm(driverForm?: NgForm) {
		if (driverForm != null)
			driverForm.reset();
		this.driverService.selectedDriver = {
			show: false,
			choose: false,
			$id: null,
			foto: '',
			surname: '',
			name: '',
			lastname: '',
			birthday: null,
			gender: '',
			passportserries: '',
			pasportnumber: '',
			datetake: null,
			whotake: '',
			addressreg: '',
			addresslive: '',
			phone: '',
			auto: '',
			status: '',
			money: '',
			nikname: ''
		}
	}
}
