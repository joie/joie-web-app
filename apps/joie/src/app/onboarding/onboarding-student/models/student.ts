import { Activities, Pillar } from '../../../enums';

export interface Preferences {
  pillars: Pillar[];
  activities: Activities[];
  sessionTypes: SessionTypes[];
}

export enum SessionTypes {
  OnDemand = 'onDdemandSessions',
  LiveStreaming = 'liveStreamingSessions',
  Coaching = 'coaching sessions',
}

export const SessionTypesLiteralMap = new Map([
  [SessionTypes.OnDemand, 'on-demand'],
  [SessionTypes.LiveStreaming, 'live streaming'],
  [SessionTypes.Coaching, '1:1 coaching sessions'],
]);
