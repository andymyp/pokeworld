import styled from "@emotion/styled";

export const Container = styled.div`
  width: 500px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;

  .id {
    font-size: 30px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
  margin: 0 auto;

  img {
    width: 150px;
    height: 150px;
    position: absolute;
    top: -10px;
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
  padding-top: 80px;

  .number {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 0.8em;
    padding: 5px 10px;
  }

  .name {
    margin: 15px 0 7px;
    letter-spacing: 1px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;

    .type p {
      line-height: 10px;
      font-size: 12px;
      margin: 5px;
    }

    .weight {
      border-right: 1px solid #afafaf;
      width: 25%;
      padding: 5px;

      p {
        line-height: 10px;
        margin: 4px;
        font-weight: bold;
      }

      span {
        font-size: 12px;
      }
    }

    .height {
      border-left: 1px solid #afafaf;
      width: 25%;
      padding: 5px;

      p {
        line-height: 10px;
        margin: 4px;
        font-weight: bold;
      }

      span {
        font-size: 12px;
      }
    }
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #afafaf;
    margin-top: 15px;
    padding-top: 10px;
    padding-bottom: 10px;

    .stat {
      width: 50%;
      margin-top: 15px;
      margin-bottom: 15px;

      p {
        margin: 0;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
`;

export const Button = styled.button`
  font-family: "Rubik", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px 30px;
  cursor: pointer;
  appearance: none;
  transition: background 0.2s linear;
  width: 100%;
  height: 80px;
  margin-top: 10px;
  background: none;
  color: #ffffff;
  border: 3px solid #ffffff;

  &:hover {
    background: #ffffff;
    color: #000;
  }
`;
