import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);

  .loading {
    width: 120px;
    height: 120px;
    background: #ffffff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80px;
      height: 80px;
    }
  }
`;
