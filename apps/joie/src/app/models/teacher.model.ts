export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  stats: Stat[];
}

export interface Stat {
  title: string;
  value: number | string;
}
