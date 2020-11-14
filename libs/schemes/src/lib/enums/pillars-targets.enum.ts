export enum MovementTargets {
  Exercise = 'exercise',
  Energy = 'energy',
  Diet = 'diet',
  Nutrition = 'nutrition',
}

export const MovementTargetsLiteralsMap = new Map([
  [MovementTargets.Exercise, 'exercise'],
  [MovementTargets.Energy, 'energy'],
  [MovementTargets.Diet, 'diet'],
  [MovementTargets.Nutrition, 'nutrition'],
]);

export enum EmotionsTargets {
  SelfRegulation = 'selfRegulation',
  SelfCare = 'selfCare',
  Relaxation = 'relaxation',
  StressReduction = 'stressReduction',
  InnerStrength = 'innerStrength',
}

export const EmotionsTargetsLiteralsMap = new Map([
  [EmotionsTargets.SelfRegulation, 'self-regulation'],
  [EmotionsTargets.SelfCare, 'self-care'],
  [EmotionsTargets.Relaxation, 'relaxation'],
  [EmotionsTargets.StressReduction, 'stress reduction'],
  [EmotionsTargets.InnerStrength, 'inner strength'],
]);

export enum ConnectionsTargets {
  SocialInteractions = 'socialInteractions',
  Friendships = 'friendships',
  Parenting = 'parenting',
  Relationships = 'relationships',
  Dating = 'dating',
}

export const ConnectionTargetsLiteralsMap = new Map([
  [ConnectionsTargets.SocialInteractions, 'social interactions'],
  [ConnectionsTargets.Friendships, 'friendships'],
  [ConnectionsTargets.Parenting, 'parenting'],
  [ConnectionsTargets.Relationships, 'relationships'],
  [ConnectionsTargets.Dating, 'dating'],
]);

export enum SpiritTargets {
  SeekMeaning = 'seekMeaning',
  IndividualPurpose = 'individualPurpose',
  Faith = 'faith',
  Values = 'values',
  EthicAndMorals = 'ethicAndMorals',
}

export const SpiritTargetsLiteralsMap = new Map([
  [SpiritTargets.SeekMeaning, 'seek meaning'],
  [SpiritTargets.IndividualPurpose, 'individual purpose'],
  [SpiritTargets.Faith, 'faith'],
  [SpiritTargets.Values, 'values'],
  [SpiritTargets.EthicAndMorals, 'ethic and morals'],
]);

export enum ProfessionalTargets {
  ProfessionalDevelopmennt = 'professionaDevelopment',
  FinancialStability = 'financialStability',
  SatisfactionsAtWork = 'satisfactionsAtWork',
}

export const ProfessionalTargetsLiteralsMap = new Map([
  [ProfessionalTargets.ProfessionalDevelopmennt, 'professional development'],
  [ProfessionalTargets.FinancialStability, 'financial stability'],
  [ProfessionalTargets.SatisfactionsAtWork, 'satisfaction at work'],
]);
