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

  .number {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 0.8em;
    padding: 5px 10px;
  }

  .name {
    margin: 15px 0 7px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
