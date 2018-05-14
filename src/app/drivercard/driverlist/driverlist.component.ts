import { Component, OnInit, Inject } from '@angular/core';
import { Driver } from '../driverservice/driver.model';
import { DriverService } from '../driverservice/driver.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { DriverformComponent } from '../driverform/driverform.component';
import { database } from 'firebase/app';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-driverlist',
	templateUrl: './driverlist.component.html',
	styleUrls: ['./driverlist.component.css']
})
export class DriverlistComponent implements OnInit {
	show: boolean = false;
	driverList: Driver[] = [];
	selectedRow: number;
	displayedColumns = ['choose', '$id', 'nikname', 'name, surname, lastname', 'status', 'money'];
	dataSource: MatTableDataSource<any> | null;

	constructor(private driverService: DriverService, public dialog: MatDialog) { }
	
	ngOnInit() {
		this.getDriver();
	}

	addNew(driver: Driver) {
		const dialogRef = this.dialog.open(DriverformComponent, {
			data: { driver: {} }
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result === 1) {
				this.driverService.driverList.push(driver);
			}
		});
	}

	getDriver() {
		this.driverService.getDataDriver().snapshotChanges().subscribe(drivers => {
			this.driverList = [];
			drivers.forEach(element => {
				let y = element.payload.toJSON();
				y["$id"] = element.key;
				this.driverList.push(y as Driver);
			});
			this.dataSource = new MatTableDataSource(this.driverList);
		});
	}

	previewclick(driver: Driver, i: number) {
		this.selectedRow = i;
		this.driverList[this.selectedRow].show = true;
		this.driverService.selectedDriver = Object.assign({}, driver);
		this.driverList.forEach(function (driverList) {
			driverList.choose = false;
		});
		this.driverList[this.selectedRow].choose = true;
		this.driverService.selectedDriver.choose = true;
	}
}
