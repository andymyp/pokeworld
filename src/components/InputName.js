import React from "react";
import { Container } from "../styles/inputName";

const InputName = (props) => {
  return (
    <Container>
      <input type="text" placeholder="Input pokemon nickname*" {...props} />
    </Container>
  );
};

export default InputName;
