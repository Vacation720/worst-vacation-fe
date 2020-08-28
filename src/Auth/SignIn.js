import React from 'react';
import { signIn } from '../vacation-api.js';
import { Link } from 'react-router-dom';
import './auth.css';

class SignIn extends React.Component {
    state = {
        signInEmail: '',
        signInPassword: ''
    }
    
    handleSignIn = async (e) => {
        e.preventDefault();

        const user = await signIn({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/')
    }

    render() { 
        return (
            <div className='login-container'>
                <h2 className='login-h2'>LOG IN:</h2>
                <form className='login-form' onSubmit={this.handleSignIn}>
                    <label className='login-label'>
                        <h3>Email</h3>
                        <input className='login-input' type='email' autoComplete="username" onChange={e => this.setState({ signInEmail: e.target.value })} value={this.state.signInEmail}/>
                    </label>
                    <label className='login-label'>
                        <h3>Password</h3>
                        <input className='login-input' type="password" autoComplete="current-password" onChange={e => this.setState({ signInPassword: e.target.value })} value={ this.state.signInPassword}/>
                    </label>
                    <div className='login-div'>
                        <button className='login-button'>LOG IN</button>
                    </div>
                </form>
                <Link to='signup'>
                    <p>Create New Account?</p>
                </Link>
            </div>
        );
    }
}
 
export default SignIn;