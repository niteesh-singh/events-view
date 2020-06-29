import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    "events": [
    {
    "start": "2020-06-10",
    "end": "2020-06-10",
    "name": "Mumbai",
    },
    {
    "start": "2020-06-12",
    "end": "2020-06-13",
    "name": "Bangalore"
    },
    {
    "start": "2020-06-15",
    "end": "2020-06-16",
    "name": "Sewree"
    }
    ]
  }
}
