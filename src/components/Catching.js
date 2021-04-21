import React from "react";
import styled from "@emotion/styled";
import LoadingCatch from "../assets/loading-catch.gif";

const Catching = () => {
  return (
    <Image>
      <img src={LoadingCatch} alt="Loading catch" />
    </Image>
  );
};

export default Catching;

const Image = styled.div`
  img {
    width: 200px;
  }
`;
