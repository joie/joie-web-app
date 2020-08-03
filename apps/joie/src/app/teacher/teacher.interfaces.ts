import { Time } from '@angular/common';

export interface Teacher {
  id: string; // todo yet
  firstName: string;
  lastName: string;
  stats: Stat[];
}

export interface Stat {
  title: string;
  value: number;
}
export interface TeacherEvent {
  title: string;
  date: Date;
  time: string; //todo Time
  type: EventTypes;
  url: string;
}

export enum EventTypes {
  Course = 'COURSE',
  Coaching = '1:1 coaching',
}
