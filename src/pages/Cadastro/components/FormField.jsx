import React from "react";
import { InputItem } from "./style";

const FormField = (props) => {
  return (
    <InputItem>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        value={props.value}
        type={props.type ? props.type : "text"}
        name={props.name}
        onChange={(event) => props.handleChange(props.name, event.target.value)}
      />
    </InputItem>
  );
};

export default FormField;
