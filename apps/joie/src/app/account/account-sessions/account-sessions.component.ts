import { Component, OnInit } from '@angular/core';
import { QueryFn } from '@angular/fire/firestore';

@Component({
  selector: 'app-account-sessions',
  templateUrl: './account-sessions.component.html',
  styleUrls: ['./account-sessions.component.scss'],
})
export class AccountSessionsComponent implements OnInit {
  public boundQueryFn: QueryFn;

  public ngOnInit() {
    this.boundQueryFn = this.queryFn.bind(this);
  }

  private queryFn(ref) {
    // TODO make sure to get user's own uid
    return ref.where('uid', '==', 'k95iNgrW8PP67NyPK2ii5AKHKeG2');
  }
}
