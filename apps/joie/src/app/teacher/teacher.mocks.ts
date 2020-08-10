import { EventTypes } from '../models/event.model';
import { Profile } from '../models/profile.model';

export const navTabs = [
  'Dashboard',
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
  events: [
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
    {
      time: '4:40',
      date: new Date('2020/07/29'),
      type: EventTypes.Course,
      title: 'Full body stretch and yoga for stress & anxiety Relief',
      url: '//http',
    },
    {
      time: '4:50',
      date: new Date('2020/07/30'),
      type: EventTypes.Coaching,
      title: 'Super relax meditation session',
      url: '/fakeurl',
    },
    // {
    //   time: '5:00',
    //   date: new Date('2020/07/31'),
    //   type: EventTypes.Course,
    //   title: 'Nutrition course',
    //   url: '/urlll',
    // },
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
