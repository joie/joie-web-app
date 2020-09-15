export enum MovementActivities {
  Exercise = 'exercise',
  Energy = 'energy',
  Diet = 'diet',
  Nutrition = 'nutrition',
}

export const MovementActivitiesLiteralsMap = new Map([
  [MovementActivities.Exercise, 'exercise'],
  [MovementActivities.Energy, 'energy'],
  [MovementActivities.Diet, 'diet'],
  [MovementActivities.Nutrition, 'nutrition'],
]);

export enum EmotionsActivities {
  SelfRegulation = 'selfRegulation',
  SelfCare = 'selfCare',
  Relaxation = 'relaxation',
  StressReduction = 'stressReduction',
  InnerStrength = 'innerStrength',
}

export const EmotionsActivitiesLiteralsMap = new Map([
  [EmotionsActivities.SelfRegulation, 'self-regulation'],
  [EmotionsActivities.SelfCare, 'self-care'],
  [EmotionsActivities.Relaxation, 'relaxation'],
  [EmotionsActivities.StressReduction, 'stress reduction'],
  [EmotionsActivities.InnerStrength, 'inner strength'],
]);

export enum ConnectionsActivities {
  SocialInteractions = 'socialInteractions',
  Friendships = 'friendships',
  Parenting = 'parenting',
  Relationships = 'relationships',
  Dating = 'dating',
}

export const ConnectionActivitiesLiteralsMap = new Map([
  [ConnectionsActivities.SocialInteractions, 'social interactions'],
  [ConnectionsActivities.Friendships, 'friendships'],
  [ConnectionsActivities.Parenting, 'parenting'],
  [ConnectionsActivities.Relationships, 'relationships'],
  [ConnectionsActivities.Dating, 'dating'],
]);

export enum SpiritActivities {
  SeekMeaning = 'seekMeaning',
  IndividualPurpose = 'individualPurpose',
  Faith = 'faith',
  Values = 'values',
  EthicAndMorals = 'ethicAndMorals',
}

export const SpiritActivitiesLiteralsMap = new Map([
  [SpiritActivities.SeekMeaning, 'seek meaning'],
  [SpiritActivities.IndividualPurpose, 'individual purpose'],
  [SpiritActivities.Faith, 'faith'],
  [SpiritActivities.Values, 'values'],
  [SpiritActivities.EthicAndMorals, 'ethic and morals'],
]);

export enum ProfessionalActivities {
  ProfessionalDevelopmennt = 'professionaDevelopment',
  FinancialStability = 'financialStability',
  SatisfactionsAtWork = 'satisfactionsAtWork',
}

export const ProfessionalActivitiesLiteralsMap = new Map([
  [ProfessionalActivities.ProfessionalDevelopmennt, 'professional development'],
  [ProfessionalActivities.FinancialStability, 'financial stability'],
  [ProfessionalActivities.SatisfactionsAtWork, 'satisfaction at work'],
]);
