import React, { FC, useState } from "react";
import { classnames } from "./Utils";

export const AccordionItem: FC<{ title: string }> = ({ title, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="card card-sm card-body bg-primary border-light mb-0">
      <a className={classnames({ "accordion-panel-header": true, collasped: !show })} onClick={() => setShow(!show)}>
        <span className="h6 mb-0 font-weight-bold">{title}</span>
        <span className="icon"><span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{show ? "×" : "+"}</span></span>
      </a>
      <div className={classnames({ collapse: true, show: !!show })}>
        <div className="pt-3">
          <p className="mb-0">{children}</p>
        </div>
      </div>
    </div>
  );
}

export const Accordion: FC = ({ children }) => {
  return (
    <div className="accordion shadow-soft rounded">{children}</div>
  );
}
