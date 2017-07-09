import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  title: String;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;

  constructor() { }

}
