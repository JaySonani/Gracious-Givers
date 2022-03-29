// Author: Jay Bhagvanbhai Sonani (B00891984)

import { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { isAuthenticated, setTokenOnLogOut } from "../../utils/Network";
import LoginModal from "./LoginModal";

import BrandLogo from "./../../assets/GraciousGivers.png";
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
                width="90rem"
                height="55rem"
                alt="Gracious Givers"
                className="rounded"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Label title="Home" path="/" />
                {
                  !isLoggedIn &&
                  <Label title="Fundraiser" path="/fundraiser" />
                }
                {(isLoggedIn && props.admin !== 'admin') &&
                  <NavDropdown
                    title="Fundraiser"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/ngo/fundraiser/create">
                      Create
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ngo/fundraiser">
                      All Fundrasiers
                    </NavDropdown.Item>
                  </NavDropdown>
                }
                {isLoggedIn && <Label title="All Donations" path="/all_donations" />}

                <Label title="About Us" path="./about_us" />
              </Nav>
              {!isLoggedIn && (
                <Nav>
                  <LoginModal />

                  <Button
                    type="button"
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
            <Navbar.Brand>
              <img
                src={BrandLogo}
                width="90rem"
                height="55rem"
                alt="Gracious Givers"
                className="rounded"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Label title="Home" path="/admin" />
                <Label
                  title="Active Fundraisers"
                  path="/admin/activefundraisers"
                />
                <NavDropdown title="Requests" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/admin/ngorequests">
                    Signup Requests
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/admin/fundraiserrequests">
                    Fundrasiers Requests
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Button
                  variant="danger"
                  className="custom-logout-btn-header"
                  onClick={() => setTokenOnLogOut()}
                >
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
