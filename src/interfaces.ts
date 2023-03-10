export interface iTask {
  id: number;
  title: string;
  short_description: string;
  description: string;
  status: boolean;
  favorite: boolean;
  date: Date;
}

export interface iFilters {
  inputValue: string,
  section: string,
  orderBy: number,
}
