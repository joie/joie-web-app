import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
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
  disable_next = false;
  disable_prev = true;
  paginationClickedCount = 0;
  pageCount = 6;

  constructor(
    private sessionsService: SessionsService,
    private authFacade: AuthFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.sessionsService.getSessionsData('sessions', this.pageCount, this.queryFn).subscribe((response: any) => {
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
      this.disable_next = false;
      this.disable_prev = true;

      this.push_prev_startAt(this.firstInResponse);
    }, error => {
      console.log(error);
    });
  }

  nextPage() {
    this.disable_next = true;
    this.sessionsService.getSessionsNext('sessions', this.pageCount, this.lastInResponse, this.queryFn).subscribe((response: any) => {
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
      if (response.length < this.pageCount) {
        // disable next button if data fetched is less than 5 - means no more data left to load
        // because limit ti get data is set to 5
        this.disable_next = true;
      } else {
        this.disable_next = false;
      }
      this.disable_prev = false;
    }, error => {
      console.log(error);
    });
  }

  prevPage() {
    this.disable_prev = true;
    this.sessionsService.getSessionsPrev('sessions', this.pageCount, this.get_prev_startAt(), this.firstInResponse, this.queryFn).subscribe((response: any) => {
      this.firstInResponse = response[0].payload.doc;
      this.lastInResponse = response[response.length - 1].payload.doc;

      this.sessions = [];
      for (let item of response) {
        this.sessions.push(item.payload.doc.data());
      }

      // maintaing paginationClickedCount no.
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
      console.log(error);
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
