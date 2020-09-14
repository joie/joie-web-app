import { Pillar, Activities } from './../../../sessions/models/session';
export interface Preferences {
  pillars: Pillar[];
  activities: Activities[];
  sessionTypes: SessionTypes[];
}

export enum SessionTypes {
  OnDemand = 'On-demand sessions',
  LiveStreaming = 'Live streaming sessions',
  Coaching = '1:1 coaching sessions',
}

export const SessionTypesLiteralMap = new Map([
  [SessionTypes.OnDemand, 'on demand'],
  [SessionTypes.LiveStreaming, 'live streaming'],
  [SessionTypes.Coaching, 'coaching'],
]);
