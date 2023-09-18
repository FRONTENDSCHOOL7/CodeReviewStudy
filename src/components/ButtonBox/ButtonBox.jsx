import React from "react";

import { Button } from "./ButtonBox.styled";

const ButtonBox = ({ click, text, wt, color }) => {
  return (
    <Button onClick={click} $wt={wt} color={color}>
      {text}
    </Button>
  );
};

export default ButtonBox;
