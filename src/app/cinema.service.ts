import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CinemaService {

  private baseUrl: String = 'https://api.themoviedb.org/3';

  constructor(private http: Http) {  }

  getAll(): Observable<Movie[]> {
    const people$ = this.http
      .get(`${this.baseUrl}/search/movie?api_key=96d78de0c62a84b4e7c4e90b8c908964&language=it-IT&query=spiderman&page=1&include_adult=true`)
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
