import {
  MatCalendar,
  MatCalendarCellCssClasses,
} from '@angular/material/datepicker';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TeacherEvent } from '../../../../models/event.model';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss'],
})
export class EventCalendarComponent implements OnInit {
  @ViewChild('calendar') calendar: MatCalendar<Date>;
  @Input() eventsArray: TeacherEvent[];
  datesArray: Date[];
  selectedDate = new Date('2020/07/30');
  startAt = new Date();

  constructor() {
    // this.onSelect(this.datesArray);
  }

  onSelect(event) {
    console.log(event);
    this.selectedDate = event;
    // todo is it supposed to be a popup with event details ?
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
    this.datesArray = this.eventsArray.map((event) => event.date);
    // this.calendar.updateTodaysDate();
  }

  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
