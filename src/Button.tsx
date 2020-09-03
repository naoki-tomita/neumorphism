import React, { FC } from "react";
import "./css/index";
import { classnames } from "./Utils";

export interface Props {
  color?: "primary" | "secondary";
  textColor?: "info" | "dark" | "secondary" | "primary" | "success" | "danger" | "gray";
  pill?: boolean;
  onClick?: () => void;
}

export const Button: FC<Props> = (props) => {
  const className = classnames({
    btn: true,
    ...(props.color ? { [`btn-${props.color}`]: true } : {}),
    ...(props.textColor ? { [`text-${props.textColor}`]: true } : {}),
    "btn-pill": !!props.pill,
  });
  return (
    <button className={className} onClick={props.onClick}>{props.children}</button>
  );
}
