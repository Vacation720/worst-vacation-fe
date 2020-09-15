import React from 'react';
import './home.css';
import { getLocation } from '../vacation-api.js';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
    state = {
        search: '',
        location: '',
        lat: '',
        lon: '',
        toItinerary: false
    }

    handleSearch = async (e) => {
        e.preventDefault();
        try {
            const locationData = await getLocation(this.state.search);
            const { lat, long, display_name} = locationData.body[0]
            this.setState({
                lat,
                lon: long,
                location: display_name,
                toItinerary: true
            })
        } catch(e) {
            return { error: e.message }
        }
        
    }

    render() { 
            if (this.state.toItinerary === true ) {
                return <Redirect to={{
                    pathname: "/create-itinerary",
                    state: {
                        lat: this.state.lat,
                        lon: this.state.lon,
                        location: this.state.location
                    }
                  }} />
            }
        return (
            
            <main className="home-main">
                <h2 className='home-h2'>Get out and stretch your imagination</h2>
                <form onSubmit={this.handleSearch} className="form-submit">
                    <input 
                        placeholder="Where are you going?" 
                        onChange={(e) => this.setState({ search: e.target.value })} 
                        value={this.state.search} />
                    <button type="submit">Search</button>
                </form>
            </main>
        );
    }
}
 
export default Home;