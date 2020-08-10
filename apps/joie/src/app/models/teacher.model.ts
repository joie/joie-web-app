import { TeacherEvent } from './event.model';

export interface Teacher {
  id: string; // todo yet
  firstName: string;
  lastName: string;
  stats: Stat[];
  events: TeacherEvent[];
}

export interface Stat {
  title: string;
  value: number | string;
}
