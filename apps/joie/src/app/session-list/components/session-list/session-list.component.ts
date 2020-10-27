import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { QueryFn } from '@angular/fire/firestore';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

import { SessionsFacade } from '../../../services/sessions.facade';
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

  constructor(private sessionsFacade: SessionsFacade) {}

  ngOnInit(): void {
    this.sessions$ = this.sessionsFacade.getSessions(this.queryFn);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
