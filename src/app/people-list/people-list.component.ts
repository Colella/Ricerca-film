import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: Person[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService
      .getAll()
      .subscribe(p => this.people = p);
  }

}
