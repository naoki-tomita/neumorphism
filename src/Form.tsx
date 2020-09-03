import React, { FC, ChangeEvent } from "react";

type InputType = "email" | "number" | "radio" | "checkbox" | "password" | "color" | "date";

export const Input: FC<{
  type?: InputType;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  id?: string;
}> = ({ type, placeholder, onChange, value, id }) => {
  return (
    <input
      className="form-control"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      id={id}
    />
  );
}

export const Checkbox: FC<{
  label: string;
  checked?: boolean;
  id?: string;
  square?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, checked, id, onChange }) => {
  if (!label) {
    return (
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={checked}
      />
    );
  }
  return (
    <div className="form-check square-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        value={(!!value).toString()}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export const Label: FC<{
  htmlFor?: string
  text: string;
}> = ({ htmlFor, text }) => {
  return (
    <label className="form-check-label" htmlFor={htmlFor}>
      {text}
    </label>
  );
}
