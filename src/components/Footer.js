import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className='footerDiv'>
            <div style={{ paddingTop: '10px' }}>
                <span>&copy; {new Date().getFullYear()} Gracious Givers. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;