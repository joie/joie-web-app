import { Profile } from '../models/profile.model';

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
