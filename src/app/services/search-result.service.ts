import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
  resultsUrl:string = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=food+bank+';
  
  constructor() { }
}
