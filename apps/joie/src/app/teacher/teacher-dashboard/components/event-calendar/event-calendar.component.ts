import {
  MatCalendar,
  MatCalendarCellCssClasses,
} from '@angular/material/datepicker';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss'],
})
export class EventCalendarComponent implements OnInit {
  @ViewChild('calendar') calendar: MatCalendar<Date>;
  @Input() sessions;
  datesArray: Date[];
  eventMap = {};
  selectedDate = new Date('2020/07/30');
  startAt = new Date();

  constructor(private router: Router, private route: ActivatedRoute) {
    // this.onSelect(this.datesArray);
  }

  onSelect(date) {
    let key = this.dateToKey(date);

    if (this.eventMap[key]) {
      this.viewSessionsList(this.eventMap[key]);
    } else {
      this.redirectToNewSession('add');
    }
    // this.selectedDate = event; // todo dont need it yet
  }

  redirectToNewSession(action, sessionData = null) {
    let extras = {
      state: { action: action },
    };
    if (sessionData) {
      Object.assign(extras, sessionData);
    }
    // this.router.navigate(['teacher', 'sessions'], extras); //todo uncoment when tdf session form ready, change url
  }

  viewSessionsList(sessions = this.sessions) {
    this.router.navigate(
      ['/teacher', 'dashboard', { outlets: { ['popup']: ['sessions'] } }],
      { state: { sessions: sessions } }
    );
  }
  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesArray
        .map((strDate) => new Date(strDate))
        .some(
          (d) =>
            d.getDate() === date.getDate() &&
            d.getMonth() === date.getMonth() &&
            d.getFullYear() === date.getFullYear()
        );
      return highlightDate ? 'scheduled' : '';
    };
  }

  ngOnInit(): void {
    this.datesArray = this.sessions.map((session) => {
      let { date } = session.dateTimeDuration;
      let key = this.dateToKey(new Date(date));

      if (!this.eventMap[key]) {
        Object.assign(this.eventMap, {
          [key]: [],
        });
      }

      this.eventMap[key].push(session);
      return date;
    });
  }

  dateToKey(date: Date): string {
    let space = new RegExp(' ', 'g');
    return date.toString().replace(space, '_');
  }
}
