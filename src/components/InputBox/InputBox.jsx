import React from "react";
import { Input } from "./InputBox.styled";

const InputBox = ({ type, placeholder, refName }) => {
  return <Input type={type} placeholder={placeholder} ref={refName} />;
};

export default InputBox;
