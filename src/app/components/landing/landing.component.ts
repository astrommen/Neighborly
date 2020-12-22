import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  // template: `
  // <h1>Neighborly</h1>
  // <input #search 
  // (keyup.enter)="submitSearch(input.value)
  // placeholder="Enter a zipcode...">
  // <button (click)="submitSearch(input.value)" >Search</button>
  // `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  val: '';

  constructor() { }

  ngOnInit(): void {
  }

  getVal(val: string) {
    console.log("searching...");
    console.log(val)
  }
  

}
