import {Component , Input , OnInit} from '@angular/core';
import {CinemaService} from '../cinema.service';
import {MovieService} from '../movie.service';
import {ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  id: number;
  movie: MovieService;

  constructor(private cService: CinemaService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    )
    this.cService.getMovie(this.id).subscribe(p => this.movie = p);
  }

  isEmpty(x: MovieService) {
    if (x.overview == null || x.overview === '') {
      return true;
    } else { return false; }
  }

  ngOnInit() {


  }

}
