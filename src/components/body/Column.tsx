import * as React from "react";
import "./Column.css";
import { TableColumn } from "../../types";

type columnProps<T> = {
  column: TableColumn<T>;
};

function Column<T>({ column }: columnProps<T>) {
  return (
    <div className="Column">
      <div className="columnText">{column.name}</div>
    </div>
  );
}

export default React.memo(Column);
