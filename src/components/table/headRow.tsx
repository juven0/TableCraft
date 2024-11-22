import * as React from "react";
import "./headRow.css";

interface headRowInterface {
  children?: React.ReactNode;
}

const HeadRow: React.FC<headRowInterface> = ({ children }) => {
  return <div className="HeadRow">{children}</div>;
};

export default HeadRow;
