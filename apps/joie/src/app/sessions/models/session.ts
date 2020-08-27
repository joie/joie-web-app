import { Price, Duration } from '../../models';
import { firestore } from 'firebase';

export interface Session {
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
  recommendationPercentage: number;
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

export enum JoieMovement {
  excersise = 'Excersice',
  energy = 'Energy',
  diet = 'Diet',
  nutrition = 'Nutrition',
}

export enum JoieEmotions {
  self_regulation = 'Self-regulation',
  self_care = 'Self-care',
  relaxation = 'Relaxation',
  stress_reduction = 'Stress Reduction',
  inner_strength = 'Inner Strength',
}

export enum JoieConnections {
  social_interactions = 'Social Interactions',
  friendships = 'Friendships',
  parenting = 'Parenting',
  relationships = 'Relationships',
  dating = 'Dating',
}

export enum JoieSpirit {
  seek_meaning = 'Seek Meaning',
  individual_purpose = 'Individual Purpose',
  faith = 'Faith',
  values = 'Values',
  ethic_and_morals = 'Ethic and morals',
}
export enum JoieProfessional {
  professional_development = 'Professional Development',
  financial_stability = 'Financial stability',
  satisfaction_at_work = 'Satisfactions at Work',
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
