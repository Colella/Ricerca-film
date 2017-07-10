import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  title: String;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;
  id: number;
  original_title: string;
  original_language: string;

  constructor() { }

}
