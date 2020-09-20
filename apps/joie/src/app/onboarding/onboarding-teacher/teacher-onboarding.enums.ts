export enum AgeGroups {
  Children = 'children',
  Youth = 'youth',
  Adults = 'adults',
  Eldery = 'eldery',
  All = 'allOfTheAbove',
}

export const AgeGroupsLiteralsMap = new Map([
  [AgeGroups.Children, 'children (6-14)'],
  [AgeGroups.Youth, 'youth (15-24'],
  [AgeGroups.Adults, 'adults (25-64'],
  [AgeGroups.Eldery, 'eldery (65+)'],
  [AgeGroups.Eldery, 'all of the above'],
]);

export enum SessionTypes {
  OnDemandSessionOrLecture = 'onDemandSessionOrLecture',
  OnDemandCourse = 'onDemandCourse', //todo courses are not available at joie yet https://github.com/joie/joie-web-app/issues/59#issue-689403295 (bullet 4)
  LiveGroupSession = 'liveGroupSession',
  LiveGroupCourse = 'liveGroupCourse',
  LiveLecture = 'liveGroupLecture',
  Coaching = 'liveCoaching',
}

export const SessionTypesLiteralsMap = new Map([
  [SessionTypes.OnDemandSessionOrLecture, 'on-demand session or a lecture'],
  [SessionTypes.OnDemandCourse, 'on-demand course'],
  [SessionTypes.LiveGroupSession, 'live group session'],
  [SessionTypes.LiveGroupCourse, 'live group course'],
  [SessionTypes.LiveLecture, 'live lecture'],
  [SessionTypes.Coaching, 'live 1:1 coaching'],
]);
