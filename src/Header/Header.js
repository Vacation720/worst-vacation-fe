import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


class Header extends React.Component {
    render() { 
        return (
            <header>
                <div>
                    <Link className='logo-div' to="/">
                        <h1>Detest<span className='header-span'>ination</span></h1>
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