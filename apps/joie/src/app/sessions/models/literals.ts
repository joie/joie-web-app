import { SessionFormat, SessionType } from './session';

export const SessionTypeLiteralsMap = new Map([
  [SessionType.Class, 'class'],
  [SessionType.Workshop, 'workshop'],
  [SessionType.Course, 'course'],
  [SessionType.Lecture, 'lecture'],
  [SessionType.Coaching, '1:1 coaching'],
]);

export const SessionFormatLiteralsMap = new Map([
  [SessionFormat.OnDemand, 'on demand'],
  [SessionFormat.LiveStreaming, 'live streaming'],
]);
