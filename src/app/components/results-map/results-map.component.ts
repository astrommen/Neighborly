import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-map',
  templateUrl: './results-map.component.html',
  styleUrls: ['./results-map.component.scss']
})
export class ResultsMapComponent implements OnInit {

  display: boolean;

  constructor() {
    this.display=true;
  }

  ngOnInit(): void {
  }

}
