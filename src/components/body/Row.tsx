import * as React from "react";
import "./Row.css";
import { TableColumn } from "../../types";
import Column from "./Column";
import Cell from "./Cell";

interface RowProps<T> {
  id?: string | number;
  columns?: TableColumn<T>[];
  number?: number;
}

function Row<T>({ columns = [] }: RowProps<T>) {
  return (
    <div className="Row">
      {columns.map((column: TableColumn<T>) => {
        return <Cell column={column} />;
      })}
    </div>
  );
}

export default React.memo(Row);
