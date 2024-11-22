import * as React from "react";
import "./warpper.css";

interface warpperProps {
  children?: React.ReactNode;
}

const Warpper: React.FC<warpperProps> = ({ children }) => {
  return <div className="Warpper">{children}</div>;
};

export default Warpper;
