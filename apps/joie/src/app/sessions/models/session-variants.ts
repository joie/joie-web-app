import { firestore } from 'firebase';
import { Activities, Pillar } from '../../enums';
import { Duration, Owner, Price } from '../../models';
import { CourseLevel, Format, Recurrence, Type } from '../enums';

/***************************************
 * SESSION INTERFACE RELATED COMPONENTS
 ***************************************/
interface SessionMetadata {
  readonly id: number | string;
  readonly createdAt: firestore.Timestamp;
  title: string;
  description?: string;
  imgUrl: string;
  owner: Owner;
  duration: Duration;
  level: CourseLevel;
  price: Price;
  activities: Activities[];
  pillar: Pillar;
  recommendationPercentage: number;
}

interface When {
  dateTime: firestore.Timestamp;
  recurring?: Recurrence;
}

interface Schedule {
  when: When;
}

export interface KalturaEvent {
  eventId: number;
  resourceId: number;
}

interface Streaming extends KalturaEvent {
  format: Format.LiveStreaming;
}

interface OnDemand {
  format: Format.OnDemand;
}

/************************
 * CLASS INTERFACES
 ************************/
interface Class extends SessionMetadata {
  type: Type.Class;
}
export interface ClassStreaming extends Class, Streaming, Schedule {}
export interface ClassOnDemand extends Class, OnDemand {}

/************************
 * WORKSHOP INTERFACES
 ************************/
interface Workshop extends SessionMetadata {
  type: Type.Workshop;
}
export interface WorkshopStreaming extends Workshop, Streaming, Schedule {}
export interface WorkshopOnDemand extends Workshop, OnDemand {}

/************************
 * COURSE INTERFACES
 ************************/
interface Course extends SessionMetadata {
  type: Type.Course;
}
export interface CourseStreaming extends Course, Streaming, Schedule {}
export interface CourseOnDemand extends Course, OnDemand {}

/************************
 * LECTURE INTERFACES
 ************************/
interface Lecture extends SessionMetadata {
  type: Type.Lecture;
}
export interface LectureStreaming extends Lecture, Streaming, Schedule {}
export interface LectureOnDemand extends Lecture, OnDemand {}

/************************
 * LECTURE INTERFACES
 ************************/
export interface Coaching extends SessionMetadata, Streaming {
  type: Type.Coaching;
  timeSlots: When[];
}
