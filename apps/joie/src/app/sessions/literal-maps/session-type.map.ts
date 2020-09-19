import { Type } from '../enums';

export const SessionTypeLiteralsMap = new Map([
  [Type.Class, 'class'],
  [Type.Workshop, 'workshop'],
  [Type.Course, 'course'],
  [Type.Lecture, 'lecture'],
  [Type.Coaching, '1:1 coaching'],
]);
