export type TableProps<T> = {
  title?: string;
  noHeader?: boolean;
  actions?: React.ReactNode | React.ReactNode[];
  columns?: TableColumn<T>[];
  selectableRows: boolean;
  //test
  data?: T[];
  pagination?: boolean;
};

export type TableColumn<T> = {
  id?: string | number;
  name?: string | number;
  allowOverflow?: boolean;
  button?: boolean;
  center?: boolean;
  width?: string;
  right?: boolean;
  sortable?: boolean;
};
