import { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { isAuthenticated, setTokenOnLogOut } from "../utils/Network";

import BrandLogo from "./../assets/GraciousGivers.png";
import Label from "./Label";

import "./styles/Header.css";

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      {props.admin ? (
        ""
      ) : (
        <Navbar
          expand="lg"
          className="headerNav"
          collapseOnSelect
          bg="light"
          variant="light"
          id="header-nav-bar"
        >
          <Container>
            <Navbar.Brand href="/home">
              <img
                src={BrandLogo}
                width="110rem"
                height="55rem"
                alt="Helping Hands"
                className="rounded"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Label title="Home" path="/" />
                <Label title="Fundraiser" path="/fundraiser" />
                <Label title="About Us" path="/about_us" />
                <NavDropdown
                  title="Fundrasier (Logged-in NGO)"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/ngo/fundraiser/create">
                    Create
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ngo/fundraiser">
                    All Fundrasiers
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              {!isLoggedIn && (
                <Nav>
                  <Button
                    variant="primary"
                    className="custom-btn-header"
                    href="/Login"
                  >
                    NGO Login
                  </Button>
                  <Button
                    variant="primary"
                    className="custom-btn-header"
                    href="/Register"
                  >
                    NGO Register
                  </Button>
                  <Button
                    variant="primary"
                    className="custom-btn-header"
                    href="/AdminLogin"
                  >
                    Admin Login
                  </Button>
                </Nav>
              )}
              {isLoggedIn && (
                <Nav>
                <Button variant="danger" className="custom-logout-btn-header" onClick={() => setTokenOnLogOut()}>
                  Logout
                </Button>
              </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      {props.admin && (
        <Navbar
          expand="lg"
          className="headerNav"
          collapseOnSelect
          bg="light"
          variant="light"
          id="header-nav-bar"
        >
          <Container>
            <Navbar.Brand href="/admin">
              <img
                src={BrandLogo}
                width="110rem"
                height="55rem"
                alt="Helping Hands"
                className="rounded"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Label title="Home" path="/admin" />
                <NavDropdown
                  title="Requests (logged in admin)"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/ngo/fundraiser/create">
                    Signup Requests
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/admin/fundraiserrequests">
                    Fundrasiers Requests
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Button variant="danger" className="custom-logout-btn-header">
                  Logout
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default Header;
