export type TableProps<T> = {
  title?: string;
  noHeader?: boolean;
  actions?: React.ReactNode | React.ReactNode[];
  columns?: TableColumn<T>[];
  //test
  data?: T[];
};

export type TableColumn<T> = {
  id?: string | number;
  name?: string | number;
};
