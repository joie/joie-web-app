import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { SessionsService } from '../../../services/sessions/sessions.service';
import { AuthFacade } from './../../../auth/services/auth.facade';
import { Session } from '../../../../../../../libs/schemes/src';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnInit {
  @Input() queryFn: QueryFn;
  uid$ = this.authFacade.uid$;

  sessions$: Observable<Session[]>;

  sessions: any[] = [];

  firstInResponse: any = [];
  lastInResponse: any = [];
  prevStrtAt: any = [];
  paginationClickedCount = 0;
  disable_next: boolean = false;
  disable_prev: boolean = true;
  pageSize = 6;

  constructor(
    private sessionsService: SessionsService,
    private authFacade: AuthFacade,
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.sessionsService.getSessionsData('sessions', this.pageSize, this.queryFn).subscribe((response: any) => {
      if (!response.length) {
        return false;
      }
      this.firstInResponse = response[0].payload.doc;
      this.lastInResponse = response[response.length - 1].payload.doc;

      this.sessions = [];
      for (let item of response) {
        this.sessions.push(item.payload.doc.data());
      }

      this.prevStrtAt = [];
      this.paginationClickedCount = 0;
      this.disable_next = false;
      this.disable_prev = false;

      this.push_prev_startAt(this.firstInResponse);
    }, error => {
      console.log(error);
    });
  }

  nextPage() {
    this.disable_next = true;
    this.sessionsService.getSessionsNext('sessions', this.pageSize, this.lastInResponse, this.queryFn).subscribe((response: any) => {
      if (!response.length) {
        this.disable_next = true;
        return;
      }
      this.firstInResponse = response[0].payload.doc;
      this.lastInResponse = response[response.length - 1].payload.doc;
      this.sessions = [];
      for (let item of response) {
        this.sessions.push(item.payload.doc.data());
      }

      this.paginationClickedCount++;
      this.push_prev_startAt(this.firstInResponse);
      if (response.length < this.pageSize) {
        // disable next button if data fetched is less than 5 - means no more data left to load
        // because limit ti get data is set to 5
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
    this.sessionsService.getSessionsPrev('sessions', this.pageSize, this.get_prev_startAt(), this.firstInResponse, this.queryFn).subscribe((response: any) => {
      this.firstInResponse = response[0].payload.doc;
      this.lastInResponse = response[response.length - 1].payload.doc;

      this.sessions = [];
      for (let item of response) {
        this.sessions.push(item.payload.doc.data());
      }

      // maintaing page no.
      this.paginationClickedCount--;

      // pop not required value in array
      this.pop_prev_startAt(this.firstInResponse);

      // enable buttons again
      if (this.paginationClickedCount === 0) {
        this.disable_prev = true;
      } else {
        this.disable_prev = false;
      }
      this.disable_next = false;
    }, error => {
      this.disable_prev = false;
    });
  }

  push_prev_startAt(prevFirstDoc) {
    this.prevStrtAt.push(prevFirstDoc);
  }

  pop_prev_startAt(prevFirstDoc) {
    this.prevStrtAt.forEach(element => {
      if (prevFirstDoc.id === element.id) {
        element = null;
      }
    });
  }

  get_prev_startAt() {
    if (this.prevStrtAt.length > (this.paginationClickedCount + 1)) {
      this.prevStrtAt.splice(this.prevStrtAt.length - 2, this.prevStrtAt.length - 1);
    }
    return this.prevStrtAt[this.paginationClickedCount - 1];
  }
}
