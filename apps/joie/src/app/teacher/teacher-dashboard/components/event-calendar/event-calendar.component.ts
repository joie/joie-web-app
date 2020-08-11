import {
  MatCalendar,
  MatCalendarCellCssClasses,
} from '@angular/material/datepicker';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TeacherEvent } from '../../../../models/event.model';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss'],
})
export class EventCalendarComponent implements OnInit {
  @ViewChild('calendar') calendar: MatCalendar<Date>;
  @Input() eventsArray: TeacherEvent[];
  datesArray: Date[];
  eventMap = {};
  selectedDate = new Date('2020/07/30');
  startAt = new Date();

  constructor(private router: Router, private route: ActivatedRoute) {
    // this.onSelect(this.datesArray);
  }

  onSelect(event) {
    if (this.eventMap[this.dateToKey(event)]) {
      console.log(this.router.routerState.snapshot);
      this.router.navigate(
        [
          '/teacher',
          'dashboard',
          {
            outlets: {
              teacherdashboardpopup: ['events'],
            },
          },
        ],
        { relativeTo: this.route }
      );
    } else {
      // todo open add event popup
      this.router.navigate(
        [
          '/teacher',
          'dashboard',
          {
            outlets: {
              teacherdashboardpopup: ['new-session'],
            },
          },
        ],
        { relativeTo: this.route }
      );
    }
    // this.selectedDate = event; // todo dont need it yet
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
    this.datesArray = this.eventsArray.map((event) => {
      Object.assign(this.eventMap, { [this.dateToKey(event.date)]: event });
      return event.date;
    });
  }

  dateToKey(date: Date): string {
    let space = new RegExp(' ', 'g');
    return date.toString().replace(space, '_');
  }

  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6; //todo shall we filter days? sat sun?
  };
}
