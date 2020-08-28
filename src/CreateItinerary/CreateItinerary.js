import React from 'react';
import { Redirect } from 'react-router-dom';
import Hotels from './Hotels.js';
import Restaurant from './Restaurant.js'
import Bars from './Bar.js'
import Tattoo from './Tattoo.js'
import Attraction from './Attraction.js'

class CreateItinerary extends React.Component {
    state = {
        lat: this.props.location.state.lat,
        lon: this.props.location.state.lon,
        location: '',
        didHotelsPost: false,
        didBarsPost: false,
        didTattooPost: false,
        didAttractionPost: false,
        didRestaurantPost: false
    }

    componentDidMount = async () => {
        const address = this.props.location.state.location.replace(/,/g, '').split(' ');

        await this.setState({
            location: `${address[0]}, ${address[3]}`
        })
    }

    render() {
        if (this.state.didRestaurantPost === true ) {
            this.props.changeTripId()
            return <Redirect to={{
                pathname: `/trip-details/${this.props.trip_id}`
              }} />
        }

        return (
            <main className='itinerary-main'>
                <h2 className='create-h2'>Let's Plan Your Trip to <span className='location-searched'>{this.state.location}</span></h2>
                <Hotels didHotelsPost={() => this.setState({ didHotelsPost: true })} trip_id={this.props.trip_id} lat={ this.state.lat } lon={ this.state.lon } hotelsDone={this.state.didHotelsPost} />
                {
                    this.state.didHotelsPost ? <Bars didBarsPost={() => this.setState({ didBarsPost: true })} trip_id={this.props.trip_id} lat={ this.state.lat } lon={ this.state.lon } barsDone={this.state.didBarsPost} /> : null
                }
                {
                    this.state.didBarsPost ? <Tattoo didTattooPost={() => this.setState({ didTattooPost: true })} trip_id={this.props.trip_id} lat={ this.state.lat } lon={ this.state.lon } tattooDone={this.state.didTattooPost} /> : null
                }
                {
                    this.state.didTattooPost ? <Attraction didAttractionPost={() => this.setState({ didAttractionPost: true })} trip_id={this.props.trip_id} lat={ this.state.lat } lon={ this.state.lon } attractionDone={this.state.didAttractionPost} /> : null
                }
                {
                    this.state.didAttractionPost ? <Restaurant didRestaurantPost={() => this.setState({ didRestaurantPost: true })} trip_id={this.props.trip_id} lat={ this.state.lat } lon={ this.state.lon }/> : null
                }
            </main>
        );
    }
}

export default CreateItinerary;