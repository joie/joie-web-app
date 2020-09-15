export const navTabs = ['Dashboard', 'Sessions', 'Profile', 'Banking', 'Email and notifications'];

export const dashboardStatsMock = [
  { title: 'On-demand', value: 3 },
  { title: 'Live-streaming', value: 6 },
  { title: 'Income', value: '1243$' },
  { title: 'Messages', value: 3 },
  { title: 'Followers', value: 6 },
];

export const passwordMock = 'kirimbo124';

export const notificationSettingsMock = {
  sessionReminders: ['Email'],
  accountActivity: ['New follow'],
  newsletterAndPromos: [],
};

// for dashboard
export const sessionsMock = [
  {
    format: 'Live streaming',
    type: 'Lecture',
    pillar: 'JoieConnections',
    level: 'Intermediate',
    activity: 'Dance',
    name: 'test',
    description: '/////////',
    goals: ['test'],
    comments: ['comment text'],
    price: '500',
    dateTimeDuration: {
      date: '2020-08-03',
      time: '16:20',
      duration: 59,
    },
    promo: 'BOHEMIANRAPSODY',
    relatedSessions: [''],
    url: '//session/:id', // todo url should refer to the session's page
  },
  {
    format: 'Live streaming',
    type: 'Lecture',
    pillar: 'JoieConnections',
    level: 'Intermediate',
    activity: 'Dance',
    name: 'TEST NUMBER TWO',
    description: '/////////',
    goals: ['test'],
    comments: ['comment text'],
    price: '500',
    dateTimeDuration: {
      date: '2020-09-03',
      time: '16:30',
      duration: 59,
    },
    promo: 'BOHEMIANRAPSODY',
    relatedSessions: [''],
    url: '//session/:id',
  },
  {
    format: 'Live streaming',
    type: 'Lecture',
    pillar: 'JoieConnections',
    level: 'Intermediate',
    activity: 'Dance',
    name: 'TEST SESH',
    description: '/////////',
    goals: ['test'],
    comments: ['comment text'],
    price: '500',
    dateTimeDuration: {
      date: '2020-08-03',
      time: '16:40',
      duration: 59,
    },
    promo: 'BOHEMIANRAPSODY',
    relatedSessions: [''],
    url: '//session/:id',
  },
  {
    format: 'Live streaming',
    type: 'Lecture',
    pillar: 'JoieConnections',
    level: 'Intermediate',
    activity: 'Dance',
    name: 'TEST SESH 4',
    description: '/////////',
    goals: ['test'],
    comments: ['comment text'],
    price: '500',
    dateTimeDuration: {
      date: '2020-08-31 00:00',
      time: '16:40',
      duration: 59,
    },
    promo: 'BOHEMIANRAPSODY',
    relatedSessions: [''],
    url: '// todo this should be a combination of session-page route and id',
  },
];
