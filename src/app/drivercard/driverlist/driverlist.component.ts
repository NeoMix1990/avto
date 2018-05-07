import { Component, OnInit } from '@angular/core';
import { Driver } from '../driverservice/driver.model';
import { DriverService } from '../driverservice/driver.service';
import {MatTableDataSource, MatDialog} from '@angular/material';
import { DriverformComponent } from '../driverform/driverform.component';
import { database } from 'firebase/app';

@Component({
  selector: 'app-driverlist',
  templateUrl: './driverlist.component.html',
  styleUrls: ['./driverlist.component.css']
})
export class DriverlistComponent implements OnInit {
	showNew: boolean = false;
	driverList: Driver[] = [];
	driverModel: Driver;
	selectedRow: number;
	displayedColumns = [ 'choose', '$id', 'nikname', 'name, surname, lastname', 'status', 'money'];
	dataSource: MatTableDataSource<any> | null;
	Database: DriverService | null;

  constructor(private driverService: DriverService, public dialog: MatDialog) { }

  ngOnInit() {
		this.getDriver();
	}

	addNew(driver: Driver){
		const dialogRef = this.dialog.open(DriverformComponent, {
      data: {driver: driver }
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
			console.log(this.dataSource.data);
		});
	}


	
	previewclick(driver: Driver, i: number) {
		this.selectedRow = i;
		this.driverService.selectedDriver = Object.assign({}, driver);
		this.driverList.forEach(function(driverList) {
      return driverList.choose = false;
    });
		this.driverList[this.selectedRow].choose = true;
	}
}
