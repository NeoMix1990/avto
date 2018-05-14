import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Driver } from './driver.model';

@Injectable()
export class DriverService {
	driverList: AngularFireList<any>;
	selectedDriver: Driver = new Driver();
	constructor(private firebasedriver: AngularFireDatabase) { }

	getDataDriver() {
		return this.driverList = this.firebasedriver.list('drivers');
	}

	insertDriver(driver: Driver) {
		this.driverList.push({
			show: driver.show = false,
			choose: driver.choose = false,
			foto: driver.foto,
			surname: driver.surname,
			name: driver.name,
			lastname: driver.lastname,
			birthday: driver.birthday,
			gender: driver.gender,
			passportserries: driver.passportserries,
			pasportnumber: driver.pasportnumber,
			datetake: driver.datetake,
			whotake: driver.whotake,
			addressreg: driver.addressreg,
			addresslive: driver.addresslive,
			phone: driver.phone,
			auto: driver.auto,
			status: driver.status,
			money: driver.money,
			nikname: driver.nikname
		});
	}

	updateDriver(driver: Driver) {
		this.driverList.update(driver.$id, {
			show: driver.show = false,
			choose: driver.choose = false,
			foto: driver.foto,
			surname: driver.surname,
			name: driver.name,
			lastname: driver.lastname,
			birthday: driver.birthday,
			gender: driver.gender,
			passportserries: driver.passportserries,
			pasportnumber: driver.pasportnumber,
			datetake: driver.datetake,
			whotake: driver.whotake,
			addressreg: driver.addressreg,
			addresslive: driver.addresslive,
			phone: driver.phone,
			auto: driver.auto,
			status: driver.status,
			money: driver.money,
			nikname: driver.nikname
		}
		);
	}

	deleteDriver($id?: string) {
		if ($id == '') {
			return false;
		} else {
			this.driverList.remove($id);
		}
	}

}
