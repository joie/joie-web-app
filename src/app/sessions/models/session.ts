import { Price, Duration } from 'src/app/models';
import { firestore as FireStore } from 'firebase';

export interface Session {
  id: number | string;
  title: string;
  publishedDate: FireStore.Timestamp;
  duration: Duration;
  courseType: CourseType;
  level: CourseLevel;
  price: Price;
  activities: string[];
  sessionType: SessionType;
  pillar: Pillar;
  description: string;
  author?: Author;
  recommendationPercentage: number;
}

export enum CourseType {
  OnDemand = 'OnDemand',
}

export enum CourseLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

export enum SessionType {
  Class = 'Class',
  Workshop = 'Workshop',
  Course = 'Course',
  Lecture = 'Lecture',
  Coaching = 'Coaching',
}

export enum Pillar {
  Movement = 'Movement',
  Emotions = 'Emotions',
  Connections = 'Connections',
  Spirit = 'Spirit',
  Professional = 'Professional',
}

export interface Author {
  id: string;
  name: string;
}
