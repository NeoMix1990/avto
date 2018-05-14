import { Component, OnInit, ViewChild } from '@angular/core';
import { DriverService } from '../driverservice/driver.service';
import { Driver } from '../driverservice/driver.model';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { DriverformComponent } from '../driverform/driverform.component';
import { DriverlistComponent } from '../driverlist/driverlist.component';

@Component({
	selector: 'app-driverpreview',
	templateUrl: './driverpreview.component.html',
	styleUrls: ['./driverpreview.component.css']
})
export class DriverpreviewComponent implements OnInit {
	
	dataSource: MatTableDataSource<any> | null;
	driverList: any[];
	constructor(private driverService: DriverService, public dialog: MatDialog) { }
	ngOnInit() {
	}

	oneditDriver(driver: Driver) {
		const dialogRef = this.dialog.open(DriverformComponent, {data: { driver: driver}});
		this.driverService.selectedDriver = Object.assign({}, driver);
		dialogRef.beforeClose().subscribe(result => {
			this.driverService.selectedDriver.show = false;
			this.driverService.selectedDriver.choose = false;
			console.log("show " + this.driverService.selectedDriver.show);
		});
	}

	onDeleteDriver($id?: string) {
		console.log(this.driverService.selectedDriver.$id);
		if (this.driverService.selectedDriver.$id != null) {
			if (confirm('Вы уверены что хотите удалить запись?') == true) {
				this.driverService.selectedDriver.show = false;
				this.driverService.selectedDriver.choose = false;
				this.driverService.deleteDriver(this.driverService.selectedDriver.$id);
			}
		} else {
			alert('Выберите запись');
		}
	}
}
