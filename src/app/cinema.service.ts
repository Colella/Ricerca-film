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
    const people$ = this.http
      .get(generateLink(this.apiKey, this.language, query))
      .map(mapPersons);
    return people$;
  }

}

function toPerson(r: any): Movie {
  const person = <Movie> ({

    title: r.title

  });
  return person;
}

function mapPerson(response: Response): Movie {
  return toPerson(response.json());
}

function mapPersons(response: Response): Movie[] {
  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toPerson)
}

function generateLink(apiKey: string, language: string, text: string): string {
  let baseLink: string;
  baseLink = 'https://api.themoviedb.org/3/search/movie?';
  return baseLink +  'api_key=' + apiKey + '&language=' + language + '&query=' + text + '&include_adult=true';
}
