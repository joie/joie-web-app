export interface ToggleBlock {
  title: string;
  allChecked: boolean;
  toggles: Toggle[];
}

export interface Toggle {
  name: string;
  isChecked: boolean;
}

export enum SessionReminders {
  email = 'Email',
  push = 'Push notification',
}

export enum ActivityReminders {
  registration = 'New registration',
  follow = 'New follow',
}

export enum NewsletterAndPromos {
  weekly = 'Weekly Newsletter',
  events = 'Free sessions, promos, events',
}
