import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 10px auto;
  max-width: 1000px;
`;

export const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 40px;
  background: #ffffff;
  border: 2px solid #5a60ff;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  border-radius: 20px;
  padding: 10px 30px;
  cursor: pointer;
  appearance: none;
  transition: all 0.2s linear;

  &:hover {
    background: #5a60ff;
    color: #ffffff;
  }
`;
