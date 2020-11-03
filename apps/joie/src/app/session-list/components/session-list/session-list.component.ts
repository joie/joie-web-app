import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { SessionsService } from '../../../services/sessions/sessions.service';
import { Session } from '../../../sessions/models';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnInit {
  @Input() queryFn: QueryFn;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<any>;

  sessions$: Observable<Session[]>;

  enrolled = true;

  sessions: any[] = [];

  firstInResponse: any = [];
  lastInResponse: any = [];
  prev_strt_at: any = [];
  pagination_clicked_count = 0;
  disable_next: boolean = false;
  disable_prev: boolean = true;

  constructor(
    private sessionsFacade: SessionsService,
  ) {}

  ngOnInit(): void {
    // this.sessions$ = this.sessionsFacade.getSessions(this.queryFn);
    this.getItems();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  getItems() {
    this.sessionsFacade.getSessionss(this.queryFn).subscribe(response => {
      if (!response.length) {
        console.log("No Data Available");
        return false;
      }
      console.log('Response = ', response);
      this.firstInResponse = response[0];
      this.lastInResponse = response[response.length - 1];

      this.sessions = [];
      for (const item of response) {
        this.sessions.push(item);
      }

      this.prev_strt_at = [];
      this.pagination_clicked_count = 0;
      this.disable_next = false;
      this.disable_prev = true;
      this.push_prev_startAt(this.firstInResponse);
    }, error => {
      console.log(error);
    });
  }

  nextPage() {
    this.disable_next = true;
    this.sessionsFacade.getSessionsNext(this.lastInResponse, this.queryFn).subscribe(response => {
      if (!response.length) {
        console.log("No More Data Available");
        this.disable_next = true;
        return;
      }

      console.log('Response = ', response);
      this.firstInResponse = response[0];
      this.lastInResponse = response[response.length - 1];

      this.sessions = [];
      for (const item of response) {
        this.sessions.push(item);
      }

      this.pagination_clicked_count++;

      this.push_prev_startAt(this.firstInResponse);
      if (response.length < 5) {
        this.disable_next = true;
      } else {
        this.disable_next = false;
      }
      this.disable_prev = false;
    }, error => {
      this.disable_next = false;
    });
  }

  prevPage() {
    this.disable_prev = true;
    this.sessionsFacade.getSessionsPrev(this.get_prev_startAt(), this.firstInResponse, this.queryFn).subscribe(response => {
      this.firstInResponse = response[0];
      this.lastInResponse = response[response.length - 1];
      console.log('Response = ', response);
      this.sessions = response;
      this.pagination_clicked_count--;
      this.pop_prev_startAt(this.firstInResponse);

      if (this.pagination_clicked_count === 0) {
        this.disable_prev = true;
      } else {
        this.disable_prev = false;
      }
      this.disable_next = false;
    }, error => {
      this.disable_prev = false;
    });
  }

  push_prev_startAt(prev_first_doc) {
    this.prev_strt_at.push(prev_first_doc);
  }

  pop_prev_startAt(prev_first_doc) {
    this.prev_strt_at.forEach(element => {
      if (prev_first_doc.id == element.id) {
        element = null;
      }
    });
  }

  get_prev_startAt() {
    if (this.prev_strt_at.length > (this.pagination_clicked_count + 1)) {
      this.prev_strt_at.splice(this.prev_strt_at.length - 2, this.prev_strt_at.length - 1);
    }
    return this.prev_strt_at[this.pagination_clicked_count - 1];
  }
}
