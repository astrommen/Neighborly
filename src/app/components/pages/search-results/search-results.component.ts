import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/SearchResult';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  displayList: boolean;
  displayMap: boolean;

  results:SearchResult[];

  showHideComp(value) {
    this.displayList = value;
    this.displayMap = !value;
    console.log(this.displayList, this.displayMap)
  }

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
