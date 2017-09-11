import { Component } from '@angular/core';

import {
  sharedData,
  sharedDataService
}                  from "../shared_data/shared_data.service";


@Component({
  selector: 'car-dropdown',
  templateUrl: 'dropdown.car.html'
})
export class dropdownCarComponent {

  data: sharedData
  selectedCarModel: string;
  carsData=[
  {
    "make": "acura",
    "name": "Acura",
    "is_hidden": false,
    "is_in_navigation": true
  },
  {
    "make": "ford",
    "name": "Ford",
    "is_hidden": false,
    "is_in_navigation": true
  },
  {
    "make": "ariel",
    "name": "Ariel",
    "is_hidden": true,
    "is_in_navigation": false
  }
];
selection='Please select a Car';
listOfCars:any[];
carModels: any[];

  constructor(private sharedDataService: sharedDataService){
    this.data = sharedDataService.data;
    this.carModels=[{
  "make": "ford",
  "models": [
    {
      "model": "ford_edge",
      "name": "Edge",
      "is_hidden": false,
      "is_in_navigation": true,
      "image": "http://buyersguide.caranddriver.com/media/assets/submodel/7925.jpg"
    },
    {
      "model": "ford_escape",
      "name": "Escape",
      "is_hidden": false,
      "is_in_navigation": true,
      "image": "http://buyersguide.caranddriver.com/media/assets/submodel/7018.jpg"
    },
    {
      "model": "ford_escort",
      "name": "Escort",
      "is_hidden": true,
      "is_in_navigation": false,
      "image": "http://media.caranddriver.com/images/13q2/510830/ford-escort-concept-photos-and-info-news-car-and-driver-photo-512773-s-original.jpg"
    }
  ]
},
{
  "make": "acura",
  "models": [
    {
      "model": "acura_ilx",
      "name": "ILX",
      "is_hidden": false,
      "is_in_navigation": true,
      "image": "http://buyersguide.caranddriver.com/media/assets/submodel/7655.jpg"
    },
    {
      "model": "acura_mdx",
      "name": "MDX",
      "is_hidden": false,
      "is_in_navigation": true,
      "image": "http://buyersguide.caranddriver.com/media/assets/submodel/7631.jpg"
    },
    {
      "model": "acura_integra",
      "name": "Integra",
      "is_hidden": true,
      "is_in_navigation": false,
      "image": "http://media.caranddriver.com/images/media/267321/1997-acura-integra-type-r-archived-test-review-car-and-driver-photo-629489-s-original.jpg"
    }
  ]
}];
  }

  getSelectedCar(){
    this.data.listOfCars=[];
    this.data.carModel = this.selection;
    if(this.selection === this.carModels[0].make){
        this.data.listOfCars = this.carModels[0].models;
    }else if (this.selection === this.carModels[1].make) {
        this.data.listOfCars = this.carModels[1].models;
    }
  }
}
