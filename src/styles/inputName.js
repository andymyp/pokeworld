import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 18px;
    border: none;
    border-bottom: 2px solid grey;

    &:focus {
      border-color: #5a60ff;
    }
  }
`;
