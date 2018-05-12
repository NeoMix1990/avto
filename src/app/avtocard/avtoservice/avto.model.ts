import { AUTO_STYLE } from "@angular/animations";

export class Avto {
	id: number;
	mark: string;
	model: string;
	color: string;
	goznumb: string;
	year: Date;
	typebody: string;
	avtoconvoy: string;
	carorganization: string;
	available: string;
	driver_id: string;
	options: {
		kidarmchair: string;
		bagaje: string;
		delivery: string;
		conditioner: string;
		to1kg: string;
	};
	drivers: string;
}


// let driverAuto = AUTO_STYLE.filter( auto => {
// 	if (auto.driver_id === Driver.$id) return true
// 	return false
// })
