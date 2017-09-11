import { Component } from '@angular/core';
import {
  sharedData,
  sharedDataService
}                    from "../shared_data/shared_data.service";

@Component({
  selector: 'car-model',
  templateUrl: 'car.model.html'
})

export class carModelComponent {

  selectedCarModels=[];
	finalResult:string;
  data:sharedData;
  dropDownStatus = false;
  selection='Model';

  constructor(private sharedDataService: sharedDataService){
      this.data = sharedDataService.data;
  }

  ngDoCheck(){
      this.selectedCarModels=[];
      if (this.data.listOfCars.length!=0) {
          this.dropDownStatus = true;
          for (let entry of this.data.listOfCars) {
             if(entry.is_in_navigation){
              this.selectedCarModels.push(entry);
             }
      }
      }
      else{
          this.dropDownStatus = false;
          this.finalResult='';
      }
  }
  showSelectedModel(){
    this.finalResult='';
    for (let entry of this.selectedCarModels) {
             if(entry.model== this.selection){
               this.finalResult = entry.image;
             }
      }
  }

}