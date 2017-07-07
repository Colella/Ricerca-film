import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CinemaService {

  private baseUrl: String = 'https://api.themoviedb.org/3';

  constructor(private http: Http) {  }

  getAll(): Observable<Movie> {
    const people$ = this.http
      .get(`${this.baseUrl}/movie/551?api_key=96d78de0c62a84b4e7c4e90b8c908964`)
      .map(mapPerson);
    return people$;
  }

}

function toPerson(r: any): Movie {
  const person = <Movie> ({

    backdrop_path: r.backdrop_path

  });
  console.log('Parsed person:', person);
  return person;
}

function mapPerson(response: Response): Movie {
  return toPerson(response.json());
}
