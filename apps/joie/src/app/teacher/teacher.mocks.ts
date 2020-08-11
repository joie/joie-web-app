import { EventTypes } from '../models/event.model';
import { Profile } from '../models/profile.model';

export const navTabs = [
  'Dashboard/another-dashboard',
  'Sessions',
  'Profile',
  'Banking',
  'Email and notifications',
];

// teacher schould be :
/*
{
dashboard: Dashboardn
sessions: Session[],
profile: Profile,
Banking: SomeTypeIdkYet,
Notifications: Settting
}
*/

const eventsMock = [
  {
    time: '4:10',
    date: new Date('2020/07/29'),
    type: EventTypes.Course,
    title: 'Full body stretch and yoga for stress & anxiety Relief',
    url: '//http',
  },
  {
    time: '4:20',
    date: new Date('2020/07/30'),
    type: EventTypes.Coaching,
    title: 'Super relax meditation session',
    url: '/fakeurl',
  },
  {
    time: '4:30',
    date: new Date('2020/07/31'),
    type: EventTypes.Course,
    title: 'Nutrition course',
    url: '/urlll',
  },
];

// export const eventsMock = [
//          {
//            ['2020/07/29']: [
//              {
//                time: '4:10',
//                date: new Date('2020/07/29'),
//                type: EventTypes.Course,
//                title: 'Full body stretch and yoga for stress & anxiety Relief',
//                url: '//http',
//              },
//              {
//                ['2020/07/30']: {
//                  time: '4:20',
//                  date: new Date('2020/07/30'),
//                  type: EventTypes.Coaching,
//                  title: 'Super relax meditation session',
//                  url: '/fakeurl',
//                },
//              },
//            ],
//          },
//          {
//            ['2020/07/31']: [
//              {
//                time: '4:30',
//                date: new Date('2020/07/31'),
//                type: EventTypes.Course,
//                title: 'Nutrition course',
//                url: '/urlll',
//              },
//            ],
//          },

export const dashboardInfoMock = {
  id: '234',
  firstName: 'Raja',
  lastName: 'Ram',
  stats: [
    { title: 'On-demand', value: 3 },
    { title: 'Live-streaming', value: 6 },
    { title: 'Income', value: '1243$' }, //TODO add some currency pipe for $
    { title: 'Messages', value: 3 },
    { title: 'Followers', value: 6 },
  ],
};

export const notificationSettingsMock = [
  {
    title: 'Session reminders',
    allChecked: true,
    toggles: [
      { name: 'Email', isChecked: false },
      { name: 'Push notification', isChecked: false },
    ],
  },
  {
    title: 'Account activity',
    allChecked: false,
    toggles: [
      { name: 'New registration', isChecked: false },
      { name: 'New follow', isChecked: false },
    ],
  },
  {
    title: 'Newsletter and promotions',
    allChecked: false,
    toggles: [
      { name: 'Weekly Newsletter', isChecked: false },
      { name: 'Free sessions, promos, events', isChecked: false },
    ],
  },
];

export const teacherProfileMock: Profile = {
  name: 'raja ram',
  email: 'raja@tip.goa',
  password: 'kirimbo124',
  timezone: '(GMT +5:30 hours) Goa, India',
};

// todo add mock for ssessions tab

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
    comments: ['//todo'],
    price: '500',
    dateTimeDuration: {
      date: '2020-08-03',
      time: '16:20',
      duration: 59,
    },
    promo: 'BOHEMIANRAPSODY',
    relatedSessions: [''],
    url: '//this comes from server',
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
    comments: ['//todo'],
    price: '500',
    dateTimeDuration: {
      date: '2020-09-03',
      time: '16:30',
      duration: 59,
    },
    promo: 'BOHEMIANRAPSODY',
    relatedSessions: [''],
    url: '//this comes from server',
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
    comments: ['//todo'],
    price: '500',
    dateTimeDuration: {
      date: '2020-08-03',
      time: '16:40',
      duration: 59,
    },
    promo: 'BOHEMIANRAPSODY',
    relatedSessions: [''],
    url: '//this comes from server',
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
    comments: ['//todo'],
    price: '500',
    dateTimeDuration: {
      date: '2020-08-03',
      time: '16:40',
      duration: 59,
    },
    promo: 'BOHEMIANRAPSODY',
    relatedSessions: [''],
    url: '//this comes from server',
  },
];
