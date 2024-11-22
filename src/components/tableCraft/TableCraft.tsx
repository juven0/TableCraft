import React from "react";
import "./TableCraft.css";
import Header from "../header/Header";
import { TableProps } from "../../types";

function TableCraft<T>(props: TableProps<T>): JSX.Element {
  const { noHeader } = props;

  const showHeader = () => {
    if (noHeader) {
      return false;
    }
    return true;
  };

  return <>{showHeader() && <Header />}</>;
}

export default TableCraft;
