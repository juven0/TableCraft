export type TableProps<T> = {
  title?: string;
  noHeader?: boolean;
  actions?: React.ReactNode | React.ReactNode[];
  //test
  data?: T[];
};
