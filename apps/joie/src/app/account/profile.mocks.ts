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

export const notificationSettingsMock = {
  sessionReminders: ['Email'],
  accountActivity: ['New follow'],
  newsletterAndPromos: [],
};

export const profileInfoMock: Profile = {
  name: 'raja ram',
  email: 'raja@tip.goa',
  password: 'kirimbo124',
  timezone: '(GMT +5:30 hours) Goa, India',
};
