import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import BrandLogo from './GraciousGivers.png';
import './css/header.css';

export default function Header() {
  
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
              <Nav.Link to='/' >Home</Nav.Link>
              <Nav.Link to='/fundraisers' >Fundraisers</Nav.Link>
              <Nav.Link to='/about_us' >About Us</Nav.Link>
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
