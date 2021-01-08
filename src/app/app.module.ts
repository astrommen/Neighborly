import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';
import { ResultsItemComponent } from './components/results-item/results-item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ResultsMapComponent } from './components/results-map/results-map.component';
import { ResultsListComponent } from './components/results-list/results-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchResultsComponent,
    ResultsItemComponent,
    SearchBarComponent,
    HeaderComponent,
    ResultsMapComponent,
    ResultsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
