import React, { FC } from "react";

export const Shadow: FC = ({ children }) => {
  return <div className="shadow rounded" style={{ height: "100%" }}>{children}</div>
}

export const ShadowSmall: FC = ({ children }) => {
  return <div className="shadow-sm rounded" style={{ height: "100%" }}>{children}</div>
}

export const ShadowLarge: FC = ({ children }) => {
  return <div className="shadow-lg rounded" style={{ height: "100%" }}>{children}</div>
}

export const ShadowSoft: FC = ({ children }) => {
  return <div className="shadow-soft rounded" style={{ height: "100%" }}>{children}</div>
}

export const ShadowInset: FC = ({ children }) => {
  return <div className="shadow-inset rounded" style={{ height: "100%" }}>{children}</div>
}
