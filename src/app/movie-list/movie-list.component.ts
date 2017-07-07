import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  films: Movie[];
  query: string;
  constructor(public banana: CinemaService) { }

  ottieni() {
    this.banana.getAll(this.query).subscribe(p => this.films = p);
  }

  ngOnInit() {}


}
