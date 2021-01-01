import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/SearchResult';


@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {

  results:SearchResult[];
  
  constructor() { }

  ngOnInit(): void {
    this.results = [
      {
        id: 1,
        // business_status: "OPERATIONAL",
        formatted_address: "3101 Tyson Ave, Philadelphia, PA 19149, United States",
        name: "Feast Of Justice",
      },
      {
        id: 2,
        // business_status: "OPERATIONAL",
        formatted_address: "7965 Fillmore St, Philadelphia, PA 19111, United States",
        name: "Food Distribution Center - Saint Timothy Luthern Church",
      },
      {
        id: 3,
        // business_status: "OPERATIONAL",
        formatted_address: "510 Somerton Ave, Philadelphia, PA 19116, United States",
        name: "Somerton Interfaith Food Bank",
      }
    ]
  }

}
