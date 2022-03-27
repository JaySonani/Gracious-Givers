import { Container, Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';

import BrandLogo from './../assets/GraciousGivers.png';
import Label from './Label';

import './styles/Header.css';

function Header() {

  return (
    <Navbar expand='lg'
      className='headerNav'
      collapseOnSelect
      bg="light"
      variant="light"
      id='header-nav-bar'>
      <Container>
        <Navbar.Brand href='/home'>
          <img src={BrandLogo}
            width='110rem'
            height='55rem'
            alt='Helping Hands' className='rounded' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Label title="Home" path="/" />
            <Label title="Fundraiser" path="/fundraiser" />
            <Label title="About Us" path="/about_us" />
            <NavDropdown title="Fundrasier (Logged-in NGO)" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ngo/fundraiser/create">Create</NavDropdown.Item>
              <NavDropdown.Item href="/ngo/fundraiser">All Fundrasiers</NavDropdown.Item>
            </NavDropdown>
            <Label title="Donations (Logged-in NGO)" path="/all_donations" />

          </Nav>
          <Nav>
            <Button variant="primary" className="custom-btn-header">
              NGO Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;