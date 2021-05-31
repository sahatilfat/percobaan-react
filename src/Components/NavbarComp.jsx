import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

function NavbarComp(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="custom-navbar">
        <NavbarBrand className="nama-logo" href="/">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="pembungkus">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mahasiswa">Mahasiswa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/kelas">Class</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hooks">Hooks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/useeffects">Use Effects</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="simple-text">Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
