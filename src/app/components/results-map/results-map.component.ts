import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

import { environment } from '../../../environments/environment';

import { FoodBankService } from '../../services/FoodBank/food-bank.service'

@Component({
  selector: 'app-results-map',
  templateUrl: './results-map.component.html',
  styleUrls: ['./results-map.component.scss']
})
export class ResultsMapComponent implements OnInit {

  map: google.maps.Map;

  zipcodeData:any={ };
  display: boolean;

  constructor(private foodbankService: FoodBankService) {
    this.display=true;
  }

  ngOnInit(): void {
    this.foodbankService.getZipcodeCoords().subscribe(data=>{
      console.log('zipcode data', data);
      this.zipcodeData = data;
      console.log(this.zipcodeData.records[0])
      
      const loader = new Loader({
        apiKey: environment.googleKey
      });
      
      loader.load().then(() => {
        this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: {lat: this.zipcodeData.records[0].fields.latitude, lng: this.zipcodeData.records[0].fields.longitude },
          zoom: 15
        });
      })
    })
  }

}
