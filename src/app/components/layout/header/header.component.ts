import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { NavigationService } from '../../../services/NavigationService/navigation-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  @Output() showCompValue = new EventEmitter<boolean>(false);

  setDisplayComp(value) {
    this.showCompValue.emit(value);
  }

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
  }

  back(): void {
    this.navigation.back()
  }

  toggleMap() {
    
  }

}
