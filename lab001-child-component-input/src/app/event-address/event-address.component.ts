import {Component, Input, OnInit} from '@angular/core';
import {EventDetailsComponent} from "../event-details.component";

@Component({
  selector: 'app-event-address',
  templateUrl: './event-address.component.html',
  styleUrls: ['./event-address.component.css']
})
export class EventAddressComponent implements OnInit {
  @Input() eventAddress;
  constructor() { }

  ngOnInit() {
  }

}
