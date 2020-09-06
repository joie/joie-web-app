import { Price, Duration } from '../../models';
import { firestore } from 'firebase';

export interface SessionInfo {
  readonly id: number | string;
  title: string;
  publishedDate: firestore.Timestamp;
  duration: Duration;
  courseType: SessionFormat;
  level: CourseLevel;
  price: Price;
  activities: string[]; // ! @aravindfz shouldn't this be set to Activities type?
  sessionType: SessionType;
  pillar: Pillar;
  description: string;
  author?: Author;
  eventId: number;
  resourceId: number;
  recommendationPercentage: number;
  thumbnailImage: string;
}

export interface SessionDetails {
  eventId: number;
  userId: string;
}

export enum SessionFormat {
  onDemand = 'On demand',
  liveStreaming = 'Live streaming',
}

export enum CourseLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  All_levels = 'All levels',
}

export enum SessionType {
  class = 'Class',
  workshop = 'Workshop',
  course = 'Course',
  lecture = 'Lecture',
  coaching = '1:1 Coaching',
}

export enum Pillar {
  movement = 'JoieMovement',
  emotions = 'JoieEmotions',
  connections = 'JoieConnections',
  spirit = 'JoieSpirit',
  professional = 'JoieProfessional',
}

export enum Activities {
  YOGA = 'Yoga',
  MEDITATION = 'Meditation',
  DANCE = 'Dance',
  NUTRITION = 'Nutrition',
  DIET = 'Diet',
  SELF_REGULATION = 'Self-regulation',
  SELF_CATE = 'Self-care',
  RELAXATION = 'Relaxation',
  STRESS_REDUCTION = 'Stress Reduction',
  INNER_STRENGTH = 'Inner Strength',
  SOCIAL_INTRACTIONS = 'Social interactions',
  FRIENDSHIPS = 'Friendships',
  PARENTING = 'Parenting',
  RELATIONSHIPS = 'Relationships',
  SEEK_MEANING = 'Seek Meaninng',
  INDIVIDUAL_PURPOSE = 'Individual Purpose',
  FAITH = 'Faith',
  VALUES = 'Values',
  ETHICS = 'Ethics',
  MORALS = 'Morals',
  PROFESSIONAL_DEVELOPMENT = 'Professional Development',
  FINANACIAL_STABILITY = 'Final Stability',
  SATISFACTION_AT_WORK = 'Satisfaction at Work',
}
export enum Recurring {
  Daily = 'Daily',
  Weekly = 'Weekly',
  BiWeekly = 'Bi-weekly',
  Monthly = 'Monthly',
}
export interface Author {
  id: string;
  name: string;
}
