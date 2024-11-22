import React from "react";
import "./TableCraft.css";
import Header from "../header/Header";
import { TableProps } from "../../types";
import Warpper from "../table/warpper";
import Table from "../table/table";
import Head from "../table/head";
import HeadRow from "../table/headRow";

function TableCraft<T>(props: TableProps<T>): JSX.Element {
  const { noHeader, title } = props;

  const showHeader = () => {
    if (noHeader) {
      return false;
    }
    if (title) {
      return true;
    }
    return false;
  };

  return (
    <>
      {showHeader() && <Header title={title} />}
      <Warpper>
        <Table>
          <Head>
            <HeadRow></HeadRow>
          </Head>
        </Table>
      </Warpper>
    </>
  );
}

export default TableCraft;
