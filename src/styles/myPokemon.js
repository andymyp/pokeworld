import styled from "@emotion/styled";

export const Card = styled.div`
  background-color: #eee;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(100, 100, 100, 0.2);
  margin: 10px;
  padding: 10px;
  text-align: center;
  color: #000;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.div`
  position: relative;
  width: 150px;
  height: 50px;

  img {
    width: 120px;
    height: 120px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

export const Info = styled.div`
  margin-top: 20px;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
  padding-top: 50px;

  .nickname {
    margin: 0;
    color: rgba(0, 0, 0, 0.7);
  }

  .name {
    margin: 0;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.7);
  }
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
