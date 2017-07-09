import {Component , OnInit} from '@angular/core';
import {MovieService} from '../movie.service'
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-search-box' ,
  templateUrl: './search-box.component.html' ,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  query: string;
  films: Array<MovieService> = new Array<MovieService>();

  constructor (private cService: CinemaService) { }

  ottieni (event , input: HTMLInputElement) {

    if (event.keyCode === 27) {
      input.value = '';
      this.films = [];
    } else {
      this.cService.getAll(this.query).subscribe(p => this.films = p);
    }

    this.cService.riempiFilm(this.films);

  }

  giveAway() {
    return this.films;
  }

  clear (input: HTMLInputElement) {
    input.value = '';
    this.films = [];
  }

  ngOnInit () {
  }

}
