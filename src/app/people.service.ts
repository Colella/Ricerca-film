import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  private baseUrl: String = 'http://swapi.co/api';

  constructor(private http: Http) {  }

  getAll(): Observable<Person[]> {
    const people$ = this.http
      .get(`${this.baseUrl}/people`)
      .map(mapPersons);
    return people$;
  }

 get(id: number): Observable<Person> {
    const person$ = this.http
      .get(`${this.baseUrl}${id}?api_key=96d78de0c62a84b4e7c4e90b8c908964`)
      .map(mapPerson);
    return person$;
  }

}

function mapPersons(response: Response): Person[] {
  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toPerson)
}

function toPerson(r: any): Person {
  const person = <Person>({

    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: Number.parseInt(r.mass),
    height: Number.parseInt(r.height),
  });
  console.log('Parsed person:', person);
  return person;
}

 function extractId(personData: any) {
  const extractedId = personData.url.replace('http://swapi.co/api/people/', '').replace('/', '');
  return parseInt(extractedId, 3);
}

function mapPerson(response: Response): Person {
    return toPerson(response.json());
}
