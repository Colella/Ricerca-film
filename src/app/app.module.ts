import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiservicesService } from './services/apiservices.service';
import { CinemaService } from './cinema.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import {MovieService} from './movie.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    // ApiservicesService,
    CinemaService,
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
