import React from 'react';
import './home.css';
import { getLocation } from '../vacation-api.js';
import { Redirect } from 'react-router-dom';
class Home extends React.Component {
    state = {
        search: '',
        lat: '',
        lon: '',
        toItinerary: false
    }

    handleSearch = async (e) => {
        e.preventDefault();
        try {
            const locationData = await getLocation(this.state.search);

            this.setState({
                lat: locationData.body[0].lat,
                lon: locationData.body[0].lon,
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
                        lon: this.state.lon
                    }
                  }} />
            }
        return (
            
            <main className="home-main">
                <form onSubmit={this.handleSearch} className="form-submit">
                    <input spellcheck="false" placeholder="Where are you going?" onChange={(e) => this.setState({ search: e.target.value })} value={this.state.search} />
                    <button type="submit">Submit</button>
                </form>
            </main>
        );
    }
}
 
export default Home;