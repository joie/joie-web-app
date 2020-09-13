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
  // @pratheeshkumarrd is this Kaltura Related data? should we explicitly state it?
  eventId: number;
  userId: string;
}

export enum SessionFormat {
  OnDemand = 'onDemand',
  LiveStreaming = 'liveStreaming',
}

export enum CourseLevel {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced',
  All = 'all',
}

export enum SessionType {
  Class = 'class',
  Workshop = 'workshop',
  Course = 'course',
  Lecture = 'lecture',
  Coaching = 'coaching',
}

export enum Pillar {
  Movement = 'movement',
  Emotions = 'emotions',
  Connections = 'connections',
  Spirit = 'spirit',
  Professional = 'professional',
}

// export enum MovementActivities {}
// excersise = 'Excersice',
// energy = 'Energy',
// diet = 'Diet',
// nutrition = 'Nutrition',

export enum Activities {
  YOGA = 'Yoga',
  MEDITATION = 'Meditation',
  DANCE = 'Dance',
  NUTRITION = 'Nutrition',
  DIET = 'Diet',
  SELF_REGULATION = 'Self-regulation',
  SELF_CARE = 'Self-care',
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
  FINANACIAL_STABILITY = 'Financial Stability',
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
