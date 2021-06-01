import React, { useContext, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { CartContext } from "../CartContext";

function NavbarComp(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { value, setValue } = useContext(CartContext);

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
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/mahasiswa" className="nav-link">
                Mahasiswa
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/kelas" className="nav-link">
                Class
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/hooks" className="nav-link">
                Hooks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/useeffects" className="nav-link">
                Use Effects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/produk" className="nav-link">
                Produk
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button color="danger">{value}</Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
