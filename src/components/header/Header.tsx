import * as React from "react";
import "./Header.css";

type HeaderProps = {
  title?: string | React.ReactNode;
  fixed?: boolean;
  actions?: React.ReactNode | React.ReactNode[];
};

const Header = ({ title, fixed, actions }: HeaderProps) => {
  return (
    <div className="Header">
      <div className="title">{title}</div>
      {actions && <div className="actions">{actions}</div>}
    </div>
  );
};

export default React.memo(Header);
