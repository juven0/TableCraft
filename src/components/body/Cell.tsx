import * as React from "react";
import "./Cell.css";
import { TableColumn } from "../../types";

interface CelleProps<T> {
  column: TableColumn<T>;
  row: T;
}

function Cell<T>({ column, row }: CelleProps<T>) {
  return <div className="Cell">{row[column.name]}</div>;
}

export default React.memo(Cell);
