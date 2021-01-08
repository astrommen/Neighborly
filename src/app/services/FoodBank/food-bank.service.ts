import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FoodBankService {
  openDataSoftAPIUrl: string = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=19111&facet=state&facet=timezone&facet=dst&refine.state=PA';

  resultsUrl:string = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=food+bank+19111&key=';
  // urlEnd:string = '&key='

  googleAPIKey: string = environment.googleKey

  constructor(private http:HttpClient) { }

  // Get Foodbanks
  getFoodbanks(){
    return this.http.get(`${this.resultsUrl}${this.googleAPIKey}`)
  } 

  getZipcodeCoords(){
    return this.http.get(`${this.openDataSoftAPIUrl}`)
  }
}
