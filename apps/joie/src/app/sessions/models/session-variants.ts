import { firestore } from 'firebase';
import { Activities, Pillar } from '../../enums';
import { Duration, Owner, Price } from '../../models';
import { CourseLevel, Format, Recurrence, Type } from '../enums';

/***************************************
 * SESSION INTERFACE RELATED COMPONENTS
 ***************************************/

interface When {
  timestamp: firestore.Timestamp;
  recurrence?: Recurrence;
}

interface Schedule {
  when?: When;
  timeSlots?: When[];
}

export interface KalturaEvent {
  eventId?: number;
  resourceId?: number;
}

interface SessionMetadata extends Schedule, KalturaEvent {
  readonly id: string;
  readonly createdAt: firestore.Timestamp;
  title: string;
  description?: string;
  thumbRef: string;
  owner: Owner;
  level: CourseLevel;
  price: Price;
  activities: Activities[];
  pillar: Pillar;
  recommendationPercentage: number;
  promo: string;
  relatedSessions: string[];
}

interface Streaming {
  format: Format.LiveStreaming;
  duration?: Duration;
}

interface OnDemand {
  format: Format.OnDemand;
  readonly duration?: Duration;
}

/************************
 * CLASS INTERFACES
 ************************/
interface Class extends SessionMetadata {
  type: Type.Class;
}
export interface ClassStreaming extends Class, Streaming {}
export interface ClassOnDemand extends Class, OnDemand {}

/************************
 * WORKSHOP INTERFACES
 ************************/
interface Workshop extends SessionMetadata {
  type: Type.Workshop;
}
export interface WorkshopStreaming extends Workshop, Streaming {}
export interface WorkshopOnDemand extends Workshop, OnDemand {}

/************************
 * COURSE INTERFACES
 ************************/
interface Course extends SessionMetadata {
  type: Type.Course;
}
export interface CourseStreaming extends Course, Streaming {}
export interface CourseOnDemand extends Course, OnDemand {}

/************************
 * LECTURE INTERFACES
 ************************/
interface Lecture extends SessionMetadata {
  type: Type.Lecture;
}
export interface LectureStreaming extends Lecture, Streaming {}
export interface LectureOnDemand extends Lecture, OnDemand {}

/************************
 * COACHING INTERFACE
 ************************/
export interface Coaching extends SessionMetadata, Streaming {
  type: Type.Coaching;
}
