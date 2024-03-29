import {Component , Input , OnInit} from '@angular/core';
import {CinemaService} from '../cinema.service';
import {MovieService} from '../movie.service';
import {ActivatedRoute , Params , Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  id: number;
  movie: any;

  constructor(private cService: CinemaService, private route: ActivatedRoute) {

  }

 ngOnInit() {
    this.route.params.switchMap((params: Params) => this.cService.getMovie(+params['id']))
      .subscribe(p => this.movie = p);
  }

}
