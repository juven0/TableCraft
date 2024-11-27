import * as React from "react";
import "./Row.css";
import { TableColumn } from "../../types";
import Column from "./Column";
import Cell from "./Cell";

interface RowProps<T> {
  id?: string | number;
  columns?: TableColumn<T>[];
  number?: number;
  selectableRows: boolean;
}

function Row<T>({ columns = [], selectableRows = false }: RowProps<T>) {
  return (
    <div className="Row">
      {selectableRows && <input type="checkbox" style={{ margin: 0 }} />}

      {columns.map((column: TableColumn<T>) => {
        return <Cell column={column} />;
      })}
    </div>
  );
}

export default React.memo(Row);
