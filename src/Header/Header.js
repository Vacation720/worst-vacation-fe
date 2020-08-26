import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


class Header extends React.Component {
    render() { 
        return (
            <header>
                <div>
                    <Link className='logo-div' to="/">
                    <img alt="logo" className="logo-plane" src='plane.png' />
                        <h1>DETEST<span className='header-span'>INATION</span></h1>
                        <p className="byline">The Five-Star App for One-Star Experiences</p>
                    </Link>
                </div>
                <nav>
                    {
                        !this.props.token &&
                        <>
                        <Link className="navLinks login" to="/login">Login</Link>
                        <Link className="navLinks signup" to="/signup">Signup</Link>
                        </>
                    }
                    {
                        this.props.token &&
                        <Link className="navLinks signup" onClick={this.props.logout} to="/">Logout</Link>
                    }
                </nav>
            </header>
        );
    }
}
 
export default Header;