import { Component, OnInit } from '@angular/core';
import {Event, Location} from '../models/event';

@Component({
  selector: 'app-databound',
  templateUrl: './databound.component.html',
  styleUrls: ['./databound.component.css']
})
export class DataboundComponent implements OnInit {
  events: Event;
  location: Location;
  constructor() {
    this.events = new Event('ngConf 2025', '3/1/2025', '8am');
    this.location = {
      address: '123 Main St',
      city: 'Salt Lake City, UT',
      country: 'USA'
    };
  }

  ngOnInit() {
  }

}
