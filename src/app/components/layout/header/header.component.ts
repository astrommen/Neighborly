import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/NavigationService/navigation-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
  }

  back(): void {
    this.navigation.back()
  }

}
