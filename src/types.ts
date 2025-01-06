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

// Reducer

export type TableState<T> = {
  allSelected: boolean;
  selectedCount: number;
  selectedRow: T[];
  //selectedColumn: TableColumn
  curentPage: number;
  rowsPerPage: number;
};

export interface AllRowAction<T> {
  type: "SELECT_ALL_ROWS";
  row: T[];
  count: number;
  rowCount: number;
}

export interface SingleRowAction<T> {
  type: "SELECT_SINGLE_ROW";
  keyField: string;
  row: T;
  isSelected: boolean;
  rowCount: number;
  sigleSelected: boolean;
}

export interface MultiRowAction<T> {
  type: "SELECT_MULTIPLE_ROWS";
  keyField: string;
  selectedRows: T[];
  totalRows: number;
}

export interface PaginationPageAction {
  type: "CHANGE_PAGE";
  page: number;
  paginationServer: boolean;
  visibleOnly: boolean;
  persistSelectedOnPageChange: boolean;
}

export type Action<T> =
  | AllRowAction<T>
  | MultiRowAction<T>
  | SingleRowAction<T>
  | PaginationPageAction;
