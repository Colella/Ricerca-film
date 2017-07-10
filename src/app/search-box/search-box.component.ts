import {Component , OnInit} from '@angular/core';
import {MovieService} from '../movie.service'
import {CinemaService} from '../cinema.service';
import {ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-search-box' ,
  templateUrl: './search-box.component.html' ,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  selected_id: number;
  query: string;
  films: Array<MovieService> = new Array<MovieService>();

  constructor (private cService: CinemaService, private router: Router, private route: ActivatedRoute ) {
  }

  ottieni (event , input: HTMLInputElement) {
    if (event.keyCode === 27) {
      input.value = '';
      this.films = [];
    } else {
      this.cService.getAll(this.query).subscribe(p => this.films = p);
    }

  }

  clear (input: HTMLInputElement) {
    input.value = '';
    this.films = [];
  }

  ngOnInit () {

  }

}
