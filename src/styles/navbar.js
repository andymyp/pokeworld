import styled from "@emotion/styled";

export const Nav = styled.div`
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #5a60ff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.div`
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: #ffffff;
    font-family: "Rubik", sans-serif;
    font-weight: 800;
    font-size: 1.7rem;
  }

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    transition: max-height 0.3s ease-in;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuItem = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease-in;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  border-radius: 20px;

  &.active {
    color: #5a60ff;
    background-color: #ffffff;
  }
`;

export const TabContainer = styled.div`
  display: none;
  z-index: 2;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #5a60ff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const Tab = styled.div`
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 0 10px;

  a {
    text-decoration: none;
  }

  i {
    font-size: 30px;
    color: #ffffff;
  }

  p {
    overflow: hidden;
    white-space: nowrap;
    max-width: 0;
    font-family: "Rubik", sans-serif;
    font-size: 1rem;
  }

  &.active {
    color: #5a60ff;
    background-color: #ffffff;
    height: 40px;

    i {
      color: #5a60ff;
    }

    p {
      margin-left: 10px;
      max-width: 200px;
      transition: max-width 0.5s linear;
    }
  }
`;
