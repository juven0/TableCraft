import React from "react";
import "./TableCraft.css";
import Header from "../header/Header";
import { TableProps } from "../../types";
import Warpper from "../table/warpper";
import Table from "../table/table";
import Head from "../table/head";
import HeadRow from "../table/headRow";
import Column from "../body/Column";
import Row from "../body/Row";

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

  const planets: string[] = [
    "Mercure",
    "Vénus",
    "Terre",
    "Mars",
    "Jupiter",
    "Saturne",
    "Uranus",
    "Neptune",
  ];

  return (
    <>
      {showHeader() && <Header title={title} />}
      <Warpper>
        <Table>
          <Head>
            <HeadRow>
              {planets.map((el) => {
                return <Column column={{ name: el }} />;
              })}
            </HeadRow>
          </Head>
          <div className="body">
            <Row />
          </div>
        </Table>
      </Warpper>
    </>
  );
}

export default TableCraft;
