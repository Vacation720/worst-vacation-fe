import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() { 
        return (
            <footer>
                <p>&#169;2020 Vacation720 LLC</p>
                <Link className="footerLinks about" to="/about">About</Link>
                <Link className="footerLinks contact" to="/contact">Contact</Link>
            </footer>
        );
    }
}
 
export default Footer;