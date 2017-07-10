import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiservicesService } from './services/apiservices.service';
import { CinemaService } from './cinema.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MovieService } from './movie.service';
import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { EmptyComponent } from './empty/empty.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    MovieDetailComponent,
    EmptyComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: EmptyComponent
      },
      {
        path: 'movie/:id',
        component: MovieDetailComponent
      }
    ]),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ApiservicesService,
    CinemaService,
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
