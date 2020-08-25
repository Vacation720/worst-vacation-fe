import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    render() { 
        return (
            <header>
                <div>
                    <Link className='logo-div' to="/">
                        <h1>Detestination</h1>
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