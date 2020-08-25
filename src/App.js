import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import SignIn from './Auth/SignIn.js';
import Signup from './Auth/Signup.js';
import Home from './Home/Home.js';
import Header from './Header';

class App extends React.Component {
  state = {
    token: localStorage.getItem('token'),
  }

  handleToken = (token) => {
    this.setState({ token: token })

    localStorage.setItem('token', token)
  }

  clearToken = () => {
    this.setState({ token: ''})

    localStorage.setItem('token', '')
  }

  render() { 
    return (
      <body>
            <Router>
                <Header token={this.state.token} logout={this.clearToken} />
                <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <Home handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                    />
                    <Route 
                        path="/login" 
                        exact
                        render={(routerProps) => <SignIn handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                    />
                    <Route 
                        path="/signup" 
                        exact
                        render={(routerProps) => <Signup handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                    />
                </Switch>
            </Router>
        </body>
    )
  }
}

export default App;