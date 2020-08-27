import React from 'react';
import { Link } from 'react-router-dom';
import './FooterPages.css';


class Contact extends React.Component {
    render() { 
        return (
            <main className="contact-main">
            <h3 className="meet">CONTACT US</h3>
            <div className="visit-section">
                <div className="visit">
                    <h3 className="visit-us">VISIT OUR OFFICE</h3>
                    <img className="office-image" alt="office" src="mess.png" />
                    <p className="contact-text"></p>
                </div>
                <div className="visit">
                    <h3 className="call">CALL US</h3>
                    <img className="office-image" alt="phone" src="phone.jpg" />
                    <p className="contact-text"></p>
                </div>
                <div className="visit">
                    <h3 className="email">EMAIL US</h3>
                    <img className="office-image" alt="phone" src="laptop.png" />
                    <p className="contact-text"></p>
                </div>
                </div>
            </main>
        );
    }
}
 
export default Contact;