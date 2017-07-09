import {Component , Inject , OnInit} from '@angular/core';
import {CinemaService} from '../cinema.service';
import { MovieService} from '../movie.service'
import {SearchBoxComponent} from '../search-box/search-box.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  films: Array<MovieService> = new Array<MovieService>();

  constructor(public cService: CinemaService) {
         this.cService.getAllFilms();
  }

  ngOnInit() {
  }


}

