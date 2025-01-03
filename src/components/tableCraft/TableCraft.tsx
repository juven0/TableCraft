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
  const { noHeader, title, selectableRows, columns, data = [] } = props;

  const showHeader = () => {
    if (noHeader) {
      return false;
    }
    if (title) {
      return true;
    }
    return false;
  };

  //a faire
  const sortData = React.useMemo(() => {
    return null;
  }, []);

  //search

  return (
    <div className="TableCraft">
      {showHeader() && <Header title={title} />}
      <Warpper>
        <Table>
          <Head>
            <HeadRow>
              {selectableRows && (
                <input type="checkbox" style={{ margin: 0 }} />
              )}
              {columns.map((el) => {
                return <Column column={el} />;
              })}
            </HeadRow>
          </Head>
          <div className="body">
            {data != undefined ? (
              data.map((el: T) => {
                return (
                  <Row
                    key={el.name}
                    columns={columns}
                    selectableRows={selectableRows}
                    row={el}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>
          <Footer />
        </Table>
      </Warpper>
    </div>
  );
}

export default TableCraft;
