import { Activities, Pillar } from '../../../enums';

export interface Preferences {
  pillars: Pillar[];
  activities: Activities[];
  sessionTypes: SessionTypes[];
}

export enum SessionTypes {
  ondemand = 'On-demand sessions',
  livestreaming = 'Live streaming sessions',
  coaching = '1:1 coaching sessions',
}
