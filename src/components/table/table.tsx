import * as React from "react";
import "./table.css";

interface TableProps {
  children?: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return <div className="Table">{children}</div>;
};

export default Table;
