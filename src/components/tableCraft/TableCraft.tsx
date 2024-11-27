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
import Footer from "../footer/Footer";

function TableCraft<T>(props: TableProps<T>): JSX.Element {
  const { noHeader, title, selectableRows } = props;

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
    { name: "Mars" },
    { name: "Jupiter" },
    { name: "Uranus" },
  ];

  return (
    <>
      {showHeader() && <Header title={title} />}
      <Warpper>
        <Table>
          <Head>
            <HeadRow>
              {selectableRows && (
                <input type="checkbox" style={{ margin: 0 }} />
              )}
              {planets.map((el) => {
                return <Column column={el} />;
              })}
            </HeadRow>
          </Head>
          <div className="body">
            <Row columns={planets} selectableRows={selectableRows} />
          </div>
          <Footer />
        </Table>
      </Warpper>
    </>
  );
}

export default TableCraft;
