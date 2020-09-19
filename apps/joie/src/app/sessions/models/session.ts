import {
  ClassStreaming,
  ClassOnDemand,
  WorkshopStreaming,
  WorkshopOnDemand,
  CourseStreaming,
  CourseOnDemand,
  LectureStreaming,
  LectureOnDemand,
  Coaching,
} from '.';

export type SessionStreaming =
  | ClassStreaming
  | WorkshopStreaming
  | CourseStreaming
  | LectureStreaming
  | Coaching;

export type SessionOnDemand =
  | ClassStreaming
  | ClassOnDemand
  | WorkshopOnDemand
  | CourseOnDemand
  | LectureOnDemand;

// a session, in general, can be 1 of the following
export type Session = SessionStreaming | SessionOnDemand;
