import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  numbers: Array<number> = new Array();
  films: Movie[];
  query: string;
  constructor(public cService: CinemaService) {
    for (let i = 0; i < 3; i++) {
      this.numbers.push(1);
    }
  }

  ottieni(event) {
    if (event.keyCode === 27) {
      this.films = [];
    } else {
      this.cService.getAll(this.query).subscribe(p => this.films = p);
    }
  }

  ngOnInit() {}


}
