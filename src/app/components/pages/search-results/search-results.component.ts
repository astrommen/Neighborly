import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  displayList: boolean;
  displayMap: boolean;

  showHideComp(value) {
    this.displayList = value;
    this.displayMap = !value;
    console.log(this.displayList, this.displayMap)
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.displayList)
    this.displayList = true;
  }

}
