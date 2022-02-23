import { Container, Navbar, Nav, Button } from 'react-bootstrap';

import BrandLogo from './../assets/GraciousGivers.png';
import Label from './Label';

import './styles/Header.css';

const Header = () => {

  return (
    <Navbar expand='lg' className='headerNav'>
      <Container>
        <Navbar.Brand href='/'>
          <img src={BrandLogo}
            width='110rem'
            height='55rem'
            alt='Gracious Givers' className='rounded' />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Label title="Home" path="/" />
          <Label title="Fundraiser" path="/fundraiser" />
          <Label title="About Us" path="/about_us" />
        </Nav>
        <Nav>
          <Button variant="primary" className="custom-btn-header">
            Login
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;