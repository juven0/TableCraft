import * as React from "react";
import "./head.css";

interface headInterface {
  children?: React.ReactNode;
}

const Head: React.FC<headInterface> = ({ children }) => {
  return <div className="Head">{children}</div>;
};

export default Head;
