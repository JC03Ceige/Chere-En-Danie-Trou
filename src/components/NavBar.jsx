import React from "react";
import {
  Navbar,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
} from "reactstrap";

import Wreath from "../assets/engagementwreath.png";

const NavBarCD = () => {
  return (
    <div>
      <Navbar className="navBar" light fixed="top">
        <NavbarBrand className="me-auto" href="/">
          <img className="navLogo" src={Wreath} />
        </NavbarBrand>
        <NavbarToggler
          className="me-2 burgerMnu"
          color="white"
          onClick={function noRefCheck() {}}
        />
        <Collapse navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarCD;
