import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driverservice/driver.service';
import { DriverlistComponent } from '../driverlist/driverlist.component';
import { Driver } from '../driverservice/driver.model';

@Component({
	selector: 'app-driverpreview',
	templateUrl: './driverpreview.component.html',
	styleUrls: ['./driverpreview.component.css']
})
export class DriverpreviewComponent implements OnInit {

	constructor(private driverService: DriverService) { }

	ngOnInit() {
	}

	oneditDriver(drv: Driver) {
		this.driverService.selectedDriver = Object.assign({}, drv);
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
