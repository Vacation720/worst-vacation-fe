import React from 'react';
import { signUp } from '../vacation-api.js';
import { Link } from 'react-router-dom';
import './auth.css'

class Signup extends React.Component {
    state = {
        signUpEmail: '',
        signUpPassword: ''
    }

    handleSignUp = async (e) => {
        e.preventDefault();

        const user = await signUp({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/')
    }

    render() { 
        return (
            <div className='login-container'>
                <h2 className='login-h2'>SIGN UP:</h2>
                <form className='login-form' onSubmit={this.handleSignUp}>
                    <label className='login-label'>
                    <h3 className='auth-h3'>Email</h3>
                        <input className='login-input' type='email' autoComplete="username" onChange={e => this.setState({ signUpEmail: e.target.value })} value={this.state.signUpEmail}/>
                    </label>
                    <label className='login-label'>
                        <h3 className='auth-h3'>Password</h3>
                        <input className='login-input' type="password" autoComplete="current-password" onChange={e => this.setState({ signUpPassword: e.target.value })} value={ this.state.signUpPassword}/>
                    </label>
                    <div className='login-div'>
                        <button className='login-button'>SIGN UP</button>
                    </div>
                </form>
                <Link to='/login'>
                    <p>Existing Account?</p>
                </Link>
            </div>
        );
    }
}
 
export default Signup;