export enum AgeGroups {
  CHILDREN = 'Children (6-14)',
  YOUTH = 'Youth (15-24)',
  ADULTS = 'Adults (25-64)',
  ELDERY = 'Eldery (65+)',
  ALL = 'All of the above',
}

export enum SessionTypes {
  ONDEMAND_SESSION_OR_LECTURE = 'On-demand session or a lecture',
  // ONDEMAND_COURSE = 'On-demand course',  //todo courses are not available at joie yet https://github.com/joie/joie-web-app/issues/59#issue-689403295 (bullet 4)
  LIVE_SESSION = 'Live group session',
  // LIVE_COURSE = 'Live group course',
  LIVE_LECTURE = 'Live group lecture',
  COACHING = 'Live 1:1 coaching',
}
