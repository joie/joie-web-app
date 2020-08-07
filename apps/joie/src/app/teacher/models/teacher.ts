export interface Teacher {
  id: string; // todo yet
  firstName: string;
  lastName: string;
  stats: Stat[];
}

export interface Stat {
  title: string;
  value: number;
}
