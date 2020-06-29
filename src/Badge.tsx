import React, { FC } from "react";
import { classnames } from "./Utils";

export const Badge: FC<{
  color?: "dark" | "secondary" | "success" | "danger" | "info";
  uppercase?: boolean;
  text: string;
}> = ({ uppercase, color = "dark", text }) => {
  return <span className={classnames({
    badge: true,
    ...{ [`badge-${color}`]: true },
    "text-uppercase": !!uppercase,
  })}>{text}</span>;
}
