import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo, Menu, MenuItem, Nav, Tab, TabContainer } from "../styles/navbar";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Nav>
        <Logo>
          <Link to="/">
            Pokemon <span>World</span>
          </Link>
        </Logo>
        <Menu>
          <Link to="/">
            <MenuItem className={pathname === "/" ? "active" : null}>
              Explore
            </MenuItem>
          </Link>
          <Link to="/mypokemons">
            <MenuItem className={pathname === "/mypokemons" ? "active" : null}>
              My Pokemon
            </MenuItem>
          </Link>
        </Menu>
      </Nav>

      <TabContainer>
        <Link to="/">
          <Tab className={pathname === "/" ? "active" : null}>
            <i className="fa fa-compass"></i>
            <p>Explore</p>
          </Tab>
        </Link>
        <Link to="/mypokemons">
          <Tab className={pathname === "/mypokemons" ? "active" : null}>
            <i className="fa fa-briefcase"></i>
            <p>My Pokemon</p>
          </Tab>
        </Link>
      </TabContainer>
    </div>
  );
};

export default Navbar;
