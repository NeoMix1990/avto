import { Component, OnInit } from '@angular/core';
import { DriverService } from './driverservice/driver.service';

@Component({
	selector: 'app-drivercard',
	templateUrl: './drivercard.component.html',
	styleUrls: ['./drivercard.component.css'],
	providers: [ DriverService ]
})
export class DrivercardComponent implements OnInit {

	constructor(private driverService: DriverService) { }

	ngOnInit() {
	}

}
