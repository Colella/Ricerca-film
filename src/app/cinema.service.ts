import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MovieService} from './movie.service'
import * as moment from 'moment';

@Injectable()
export class CinemaService {

  apiKey = '44df2ade9e4e7b9cf906452137cd15b9';
  language = 'it';
  private listaFilms: Array<MovieService>;
  baseUrl = 'https://api.themoviedb.org/3/movie';
  movie$: Observable<MovieService>;

  constructor(private http: Http) {
    this.listaFilms = new Array<MovieService>();
  }

  getAll(query: string): Observable<MovieService[]> {
    const movies$ = this.http
      .get(generateLink(this.apiKey, this.language, query))
      .map(mapFilms);
    return movies$;
  }

  getMovie(id: number): Observable<MovieService> {
    this.movie$ = this.http
      .get(generateDetailLink(id, this.apiKey, this.language))
      .map(mapMovie);
    return this.movie$;
  }

}

function toMovie(r: any): MovieService {
  const movie = <MovieService> ({

    id: r.id,
    title: r.title,
    vote_average: r.vote_average,


    overview: (r.overview == null || r.overview === '') ? 'NO DESCRIPTION AVAILABLE' : r.overview,

   // if ( r.overview == null || r.overview === '') { }


    poster_path: r.poster_path,
    release_date: moment(r.release_date).format('YYYY'),
    original_title: r.original_title,
    original_language: r.original_language

  });
  return movie;
}

function mapMovie(response: Response): MovieService {
  return toMovie(response.json());
}

function mapFilms(response: Response): MovieService[] {
  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toMovie)
}



function generateLink(apiKey: string, language: string, text: string): string {
  let baseLink: string;
  baseLink = 'https://api.themoviedb.org/3/search/movie?';
  return baseLink + 'api_key=' + apiKey + '&language=' + language + '&query=' + text + '&include_adult=false';
}

function generateDetailLink(id: number, apiKey: string, language: string): string {
  let baseLink: string;
  baseLink = 'https://api.themoviedb.org/3/movie/';
  return baseLink + id + '?api_key=' + apiKey + '&language=' + language;
}
