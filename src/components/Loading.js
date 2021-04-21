import React from "react";
import loading from "../assets/loading.gif";

import { useAppContext } from "../contexts/AppProvider";

import { Wrapper } from "../styles/loading";

const Loading = () => {
  const { isLoading } = useAppContext();

  if (isLoading) {
    return (
      <Wrapper>
        <div className="loading">
          <img src={loading} alt="loading" />
        </div>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default Loading;
