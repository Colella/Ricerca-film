import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiservicesService } from './services/apiservices.service';
import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list/people-list.component';
import { CinemaService } from './cinema.service';
import { MovieListComponent } from './movie-list/movie-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ApiservicesService,
    PeopleService,
    CinemaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
