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
        trip_id: 1,
        didHotelsPost: false,
        didBarsPost: false,
        didTattooPost: false,
        didAttractionPost: false,
        didRestaurantPost: false
    }

    render() {
        if (this.state.didRestaurantPost === true ) {
            return <Redirect to={{
                pathname: `/trip-details/${this.state.trip_id}`
              }} />
        }
        return (
            <div>
                <Hotels didHotelsPost={() => this.setState({ didHotelsPost: true })} trip_id={this.state.trip_id} lat={ this.state.lat } lon={ this.state.lon }/>
                {
                    this.state.didHotelsPost ? <Bars didBarsPost={() => this.setState({ didBarsPost: true })} trip_id={this.state.trip_id} lat={ this.state.lat } lon={ this.state.lon }/> : null
                }
                {
                    this.state.didBarsPost ? <Tattoo didTattooPost={() => this.setState({ didTattooPost: true })} trip_id={this.state.trip_id} lat={ this.state.lat } lon={ this.state.lon }/> : null
                }
                {
                    this.state.didTattooPost ? <Attraction didAttractionPost={() => this.setState({ didAttractionPost: true })} trip_id={this.state.trip_id} lat={ this.state.lat } lon={ this.state.lon }/> : null
                }
                {
                    this.state.didAttractionPost ? <Restaurant didRestaurantPost={() => this.setState({ didRestaurantPost: true })} trip_id={this.state.trip_id} lat={ this.state.lat } lon={ this.state.lon }/> : null
                }
            </div>
        );
    }
}


 
export default CreateItinerary;