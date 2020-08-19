import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  Session,
  CourseLevel,
  CourseType,
  Pillar,
  SessionType,
} from '../models';
import { DurationUnits } from '../../models';
import { firestore } from 'firebase';
import { DbService } from '../../services/db.service';

@Injectable()
export class SessionService {
  private collectionPath = 'sessions';
  constructor(private dbService: DbService) {}

  getSession(sessionId: number) {
    return (of({
      id: 1,
      level: CourseLevel.Beginner,
      courseType: CourseType.OnDemand,
      description:
        'Training to become an Iyengar Yoga teacher generally takes between 3-5 years and thus attracts only deeply dedicated practitioners. This, in combination with a certification process that evelopment combination with a certification processacross the globe,',
      duration: {
        amount: 10,
        unit: DurationUnits.m,
      },
      pillar: Pillar.movement,
      price: {
        display: 180,
        currency: 'USD',
      },
      publishedDate: '07-19-2020',
      sessionType: SessionType.Workshop,
      title: 'Full Body Stretch / Yoga for STRESS & ANXIETY Relief',
      activities: ['Yoga'],
      author: {
        id: 112,
        name: 'Jill Shireen',
      },
      recommendationPercentage: 97,
    }) as unknown) as Observable<Session>;
    //  return this.dbService.get$<Session>(`sessions/${sessionId}`) as Observable<Session>;
  }
}
