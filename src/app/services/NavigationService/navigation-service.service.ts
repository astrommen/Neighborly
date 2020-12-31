import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = []

  constructor(private router: Router, private location: Location) {
    // listening to router events of type NavigationEnd
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // managing app-specific nav history
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  back(): void {
    // after using back func, remove the url from history
    this.history.pop()
  
    // checks if app was started on detail router or new tab
    if (this.history.length > 0) {
      this.location.back()
    } else { // if app was started on detail router or new tab
      // navigate to landing
      this.router.navigateByUrl('/')
    }
  }
}
