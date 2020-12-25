import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../../models/SearchResult';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss']
})
export class ResultsItemComponent implements OnInit {

  @Input() result: SearchResult;

  constructor() { }

  ngOnInit(): void {
    console.log("here")
  }

}
