import { Component, OnInit, ViewChild } from '@angular/core';
import { DriverService } from '../driverservice/driver.service';
import { Driver } from '../driverservice/driver.model';
import { MatDialog } from '@angular/material';
import { DriverformComponent } from '../driverform/driverform.component';

@Component({
	selector: 'app-driverpreview',
	templateUrl: './driverpreview.component.html',
	styleUrls: ['./driverpreview.component.css']
})
export class DriverpreviewComponent implements OnInit {

	constructor(private driverService: DriverService, public dialog: MatDialog) { }
	ngOnInit() {
	}

	oneditDriver(driver: Driver) {
		
		const dialogRef = this.dialog.open(DriverformComponent, {data: { driver: driver}});

		console.log(driver);
		dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
				const foundIndex = this.driverService.selectedDriver.$id;
				console.log(foundIndex);
        // Then you update that record using data from dialogData (values you enetered)
        this.driverService.driverList[foundIndex] = this.driverService.getDataDriver();
      }
    });
	}

	onDeleteDriver($id?: string) {
		console.log(this.driverService.selectedDriver.$id);
		if (this.driverService.selectedDriver.$id != null) {
			if (confirm('Вы уверены что хотите удалить запись?') == true) {
				this.driverService.deleteDriver(this.driverService.selectedDriver.$id);
			}
		} else {
			alert('Выберите запись');
		}
	}
}
