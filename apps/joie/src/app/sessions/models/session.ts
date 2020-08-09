import { Price, Duration } from '../../models';
import { firestore as FireStore } from 'firebase';

export interface Session {
  id: number | string;
  title: string;
  publishedDate: FireStore.Timestamp;
  duration: Duration;
  courseType: CourseType;
  level: CourseLevel;
  price: Price;
  activities: string[];
  sessionType: SessionType;
  pillar: Pillar;
  description: string;
  author?: Author;
  recommendationPercentage: number;
}

export enum CourseType {
  OnDemand = 'On demand',
  LiveStreaming = 'Live streaming',
}

export enum CourseLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  All_levels = 'All levels',
}

export enum SessionType {
  Class = 'Class',
  Workshop = 'Workshop',
  Course = 'Course',
  Lecture = 'Lecture',
  Coaching = 'Coaching',
}

export enum Pillar {
  Movement = 'JoieMovement',
  Emotions = 'JoieEmotions',
  Connections = 'JoieConnections',
  Spirit = 'JoieSpirit',
  Professional = 'JoieProfessional',
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
export enum Repeat {
  Daily = 'Daily',
  Weekly = 'Weekly',
  BiWeekly = 'Bi-weekly',
  Monthly = 'Monthly',
}
export interface Author {
  id: string;
  name: string;
}
