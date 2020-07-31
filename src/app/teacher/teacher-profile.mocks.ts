import { EventTypes } from './teacher.interfaces';

export const navTabs = [
  'Dashboard',
  'Sessions',
  'Profile',
  'Banking',
  'Email and notifications',
];

export const teacherMock = {
  id: '234',
  firstName: 'Raja',
  lastName: 'Ram',
  stats: [
    { title: 'On-demand', value: 3 },
    { title: 'Live-streaming', value: 6 },
    { title: 'Income', value: 1243 }, //TODO add some currency pipe for $
    { title: 'Messages', value: 3 },
    { title: 'Followers', value: 6 },
  ],
};

export const eventsMock = [
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
