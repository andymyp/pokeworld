import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  margin: 20px;
  width: 100%;
  position: relative;

  .row {
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  font-size: 30px;
`;

export const Details = styled.div`
  padding: 20px 40px;
  width: 100%;

  .abilities {
    h3 {
      margin-bottom: 10px;
    }

    span {
      border: 1px solid #5a60ff;
      border-radius: 10px;
      padding: 5px 10px;
      margin-right: 10px;
      margin-top: 10px;
      align-items: center;
      justify-content: center;
      display: inline-block;
      text-transform: capitalize;
    }
  }

  .moves {
    margin-top: 40px;

    h3 {
      margin-bottom: 10px;
    }

    span {
      border: 1px solid #5a60ff;
      border-radius: 10px;
      padding: 5px 10px;
      margin-right: 10px;
      margin-top: 10px;
      align-items: center;
      justify-content: center;
      display: inline-block;
      text-transform: capitalize;
    }
  }
`;
