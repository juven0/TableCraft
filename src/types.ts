export type TableProps<T> = {
  title?: string;
  noHeader?: boolean;
  actions?: React.ReactNode | React.ReactNode[];
  //test
  data?: T[];
};

export type TableColumn = {
  id?: string | number;
  name?: string | number;
};
