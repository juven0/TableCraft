import * as React from "react";
import "./Cell.css";
import { TableColumn } from "../../types";

interface CelleProps<T> {
  column: TableColumn<T>;
}

function Cell<T>({ column }: CelleProps<T>) {
  return <div className="Cell">{column.name}</div>;
}

export default React.memo(Cell);
