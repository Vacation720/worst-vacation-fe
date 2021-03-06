import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect,
} from 'react-router-dom';
import SignIn from './Auth/SignIn.js';
import Signup from './Auth/Signup.js';
import Home from './Home/Home.js';
import Header from './Header/Header';
import Footer from './Footer/Footer.js';
import CreateItinerary from './CreateItinerary/CreateItinerary.js';
import TripDetails from './TripDetails/TripDetails';
import Itineraries from './Itineraries/Itineraries';
import AboutUs from './Footer/About.js';
import Contact from './Footer/Contact.js';

class App extends React.Component {
  state = {
    token: localStorage.getItem('token'),
    trip_id: 1
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
      <div className='app'>
        <Router>
              <Header token={this.state.token} logout={this.clearToken} />
              {
                  !this.state.token ? <Redirect to='/signup' /> : <></>
              }
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
                  <Route 
                      path="/create-itinerary" 
                      exact
                      render={(routerProps) => <CreateItinerary changeTripId={() => this.setState({ trip_id: this.state.trip_id + 1})} trip_id={this.state.trip_id} handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                  />
                  <Route 
                      path="/trip-details/:id" 
                      exact
                      render={(routerProps) => <TripDetails handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                  />
                  <Route 
                      path="/my-trips" 
                      exact
                      render={(routerProps) => <Itineraries handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                  />
                   <Route 
                      path="/about" 
                      exact
                      render={(routerProps) => <AboutUs handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                  />
                   <Route 
                      path="/contact" 
                      exact
                      render={(routerProps) => <Contact handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                  />
              </Switch>
              <Footer />
          </Router>
      </div>
    )
  }
}

export default App;