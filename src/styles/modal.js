import styled from "@emotion/styled";

export const Wrapper = styled.div`
  z-index: auto;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Model = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  position: relative;
  min-width: 500px;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const Header = styled.div`
  font-size: calc(9px + 2vmin);
  display: flex;

  .title {
    font-size: 20px;
  }
`;

export const Close = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

export const Body = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Button = styled.button`
  margin-top: 20px;
  margin-left: 10px;
  background: #ffffff;
  border: 1px solid #5a60ff;
  font-size: 14px;
  border-radius: 10px;
  padding: 10px 30px;
  cursor: pointer;
  appearance: none;
  transition: all 0.2s linear;

  &:hover {
    background: #5a60ff;
    color: #ffffff;
  }
`;
