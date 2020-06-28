import React, { FC } from "react";
import "./css/index";

export interface Props {
  m?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  mx?: number;
  my?: number;
  p?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  px?: number;
  py?: number;
}
export const Box: FC<Props> = (props) => {
  const className =
    Object.entries(props)
      .filter(([key]) => key.startsWith("m") || key.startsWith("p"))
      .map(([key, value]) => `${key}-${value}`)
      .join(" ");
  return (
    <div className={className}>{props.children}</div>
  );
}
