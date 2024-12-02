export type TableProps<T> = {
  title?: string;
  noHeader?: boolean;
  actions?: React.ReactNode | React.ReactNode[];
  columns: TableColumn<T>[];
  selectableRows: boolean;
  //test
  data?: T[];
  pagination?: boolean;
  TableStyles?: TableStyles;
};

export type TableColumn<T> = {
  id?: string | number;
  name: string | number;
  title?: string | number;
  allowOverflow?: boolean;
  button?: boolean;
  center?: boolean;
  width?: string;
  right?: boolean;
  sortable?: boolean;
  visible?: boolean;
};

export type TableStyles = {
  backgroundColor?: string;
  textColor?: string;
  borderRadus?: string;
};
