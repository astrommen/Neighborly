import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  val: '';

  constructor() { }

  ngOnInit(): void {
  }

  getVal(val: string) {
    console.log("searching...");
    console.log(val);
    
  }
}
