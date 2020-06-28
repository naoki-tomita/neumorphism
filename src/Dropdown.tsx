import React, { FC, useState } from "react";
import { classnames } from "./Utils";

export const Dropdown: FC = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={classnames({ dropdown: true, show: !!show })}>
      <DropdownButton onClick={() => setShow(!show)}>v</DropdownButton>
      <DropdownMenu show={show}>{children}</DropdownMenu>
    </div>
  );
}

export const ButtonGroup: FC = ({ children }) => {
  return (
    <div className="btn-group">{children}</div>
  );
}

export const DropdownButton: FC<{ onClick: () => void }> = ({ onClick, children }) => {
  return (
    <button className="btn dropdown-toggle dropdown-toggle-split" onClick={onClick}>{children}</button>
  );
}

export const DropdownMenu: FC<{ show?: boolean }> = ({ show, children }) => {
  return (
    <div className={classnames({ "dropdown-menu": true, show: !!show })}>{children}</div>
  );
}

export const DropdownItem: FC<{ onClick?: () => void }> = ({ onClick, children }) => {
  return (
    <a className="dropdown-item" href="#" onClick={onClick}>{children}</a>
  );
}

export const DropdownDivider: FC = () => {
  return (
    <div className="dropdown-divider"></div>
  );
}
