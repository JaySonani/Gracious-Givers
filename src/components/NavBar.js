import { Container, Navbar, Nav } from 'react-bootstrap';
import Label from './Label';
import Logo from './Logo';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">

            <Logo />

            <Label title="Home" path="/" />
            <Label title="Fundraiser" path="/fundraiser" />
            <Label title="About Us" path="/about_us" />

        </div>
    );
}

export default NavBar;