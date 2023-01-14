import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {

  data: any =
    [
      {
        name: "Douglas Pace",
        country: 'UK'
      },
      {
        "name": "Mcleod Mueller",
        "country": 'USA'
      },
      {
        "name": "Day Meyers",
        "country": 'HK'
      }
      , {
        "name": "Agurrin Elis",
        "country": 'UK'
      }, {
        "name": "Cook Tyson",
        "country": 'USA'
      }
    ]


}
