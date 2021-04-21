import React from "react";
import styled from "@emotion/styled";
import sad from "../assets/sad-emoji.png";

const Failed = () => {
  return (
    <Image>
      <img src={sad} alt="Failed" />
    </Image>
  );
};

export default Failed;

const Image = styled.div`
  img {
    width: 180px;
  }
`;
