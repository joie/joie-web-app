import { Component } from '@angular/core';
import { CollectionReference, QueryFn } from '@angular/fire/firestore';
import { Status } from '../../../../../../../libs/schemes/src';

@Component({
  selector: 'app-sessions-dashboard',
  templateUrl: './sessions-dashboard.component.html',
  styleUrls: ['./sessions-dashboard.component.scss'],
})
export class SessionsDashboardComponent {
  queryFn(): QueryFn {
    return (ref: CollectionReference): firebase.firestore.Query<firebase.firestore.DocumentData> =>
      ref.where('status', '==', Status.Public);
  }
}
