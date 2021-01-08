import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from 'src/app/models/SearchResult';
import { FoodBankService } from '../../services/FoodBank/food-bank.service'


@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  foodbanks:any= { };
  results:SearchResult[];
  
  constructor(private foodbankService: FoodBankService) { }

  ngOnInit() {
    this.foodbankService.getFoodbanks().subscribe(data=>{
      console.log(data);
      this.foodbanks= data;
      console.log(this.foodbanks.results[0]);
      this.results = this.foodbanks.results;
    });
  }
}
