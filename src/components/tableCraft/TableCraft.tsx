import React from "react";
import "./TableCraft.css";
import Header from "../header/Header";
import { TableColumn, TableProps } from "../../types";
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

  const planets: TableColumn<T>[] = [
    { name: "Mercure" },
    { name: "Vénus" },
    { name: "Terre" },
  ];

  //   "Mercure",
  //   "Vénus",
  //   "Terre",
  //   "Mars",
  //   "Jupiter",
  //   "Saturne",
  //   "Uranus",
  //   "Neptune",
  // ];

  return (
    <>
      {showHeader() && <Header title={title} />}
      <Warpper>
        <Table>
          <Head>
            <HeadRow>
              {planets.map((el) => {
                return <Column column={el} />;
              })}
            </HeadRow>
          </Head>
          <div className="body">
            <Row columns={planets} />
          </div>
        </Table>
      </Warpper>
    </>
  );
}

export default TableCraft;
