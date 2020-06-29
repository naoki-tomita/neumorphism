import React, { FC } from "react";

export const Card: FC = ({ children }) => {
  return (
    <div className="card bg-primary border-light shadow-soft">{children}</div>
  );
}

export const CardImage: FC<{ src: string }> = ({ src }) => {
  return <img src={src} className="card-img-top rounded-top" />;
}

export const CardBody: FC = ({ children }) => {
  return (
    <div className="card-body">{children}</div>
  );
}

export const CardTag: FC<{ text: string }> = ({ text }) => {
  return (
    <span className="h6 small mr-2">{text}</span>
  );
}

export const CardTitle: FC<{ title: string }> = ({ title }) => {
  return <h3 className="h5 card-title mt-3">{title}</h3>
}

export const CardText: FC<{ text: string }> = ({ text }) => {
  return <p className="card-text">{text}</p>
}

export const CardActionButton: FC<{ onClick?: () => void }> = ({ onClick, children }) => {
  return <button className="btn btn-sm" onClick={onClick} >{children}</button>;
}
