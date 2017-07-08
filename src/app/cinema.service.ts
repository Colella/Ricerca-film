import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CinemaService {

  apiKey = '44df2ade9e4e7b9cf906452137cd15b9';
  language = 'it';
  baseUrl: String = 'https://api.themoviedb.org/3';

  constructor(private http: Http) {  }

  getAll(query: string): Observable<Movie[]> {
    const movies$ = this.http
      .get(generateLink(this.apiKey, this.language, query))
      .map(mapPersons);
    return movies$;
  }

}

function toMovie(r: any): Movie {
  const movie = <Movie> ({

    title: r.title,
    vote_average: r.vote_average,
    overview: r.overview,
    poster_path: r.poster_path

  });
  return movie;
}

function mapMovie(response: Response): Movie {
  return toMovie(response.json());
}

function mapPersons(response: Response): Movie[] {
  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toMovie)
}

function generateLink(apiKey: string, language: string, text: string): string {
  let baseLink: string;
  baseLink = 'https://api.themoviedb.org/3/search/movie?';
  return baseLink + 'api_key=' + apiKey + '&language=' + language + '&query=' + text + '&include_adult=false';
}
