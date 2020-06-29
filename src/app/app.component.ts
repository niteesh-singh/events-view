import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

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
  };
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [
      { title: 'Event 1', date: this.data.events[0].start},
      { title: 'Event 2', date: this.data.events[1].start},
      { title: 'Event 3', date: this.data.events[2].start}
    ]
  };

}
