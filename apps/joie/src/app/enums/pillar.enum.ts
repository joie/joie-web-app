export enum Pillar {
  Movement = 'movement',
  Emotions = 'emotions',
  Connections = 'connections',
  Spirit = 'spirit',
  Professional = 'professional',
}

export const PillarsLiteralMap = new Map([
  [Pillar.Movement, 'movement'],
  [Pillar.Emotions, 'emotions'],
  [Pillar.Connections, 'connections'],
  [Pillar.Spirit, 'spirit'],
  [Pillar.Professional, 'professional'],
]);

export const PillarsIconsMap = new Map([
  [Pillar.Movement, 'takeoff'],
  [Pillar.Emotions, 'circles'],
  [Pillar.Connections, 'diamond'],
  [Pillar.Spirit, 'sunbeams'],
  [Pillar.Professional, 'more-square'],
]);
