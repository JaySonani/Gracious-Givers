import './css/footer.css';

export default function Footer() {
    return (
        <footer className='footer footerDiv'>
           <div style={{paddingTop:'10px'}}>
                <span>&copy; {new Date().getFullYear()} Gracious Givers. All Rights Reserved.</span>
            </div>
        </footer>
      );
}

