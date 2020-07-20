import { Component, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Session } from '../../models';
import { SessionService } from '../../services/session.service';

@Component({
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent implements OnInit, OnDestroy {
  courseId = 123;
  session: Session;
  private stop$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(takeUntil(this.stop$))
      .subscribe((params) => {
        // TODO - remove this 1234 after integrating with backend
        this.courseId = params.courseId || 1234;
      });
    this.loadData();
  }

  ngOnDestroy() {
    this.stop$.next();
  }

  loadData() {
    this.sessionService
      .getSession(this.courseId)
      .subscribe((session) => (this.session = session as Session));
  }
}
