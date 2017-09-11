import {Injectable} from '@angular/core';

export class sharedData{
	carModel: string;
	listOfCars: any[];
}

@Injectable()
export class sharedDataService {

	data: sharedData;

	constructor(){

		this.data={
			carModel:'',
			listOfCars:[]
		}
	}


}