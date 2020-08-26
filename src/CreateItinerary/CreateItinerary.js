import React from 'react';
import Hotels from './Hotels.js';
// import Restaurant from './Restaurant.js'
// import Bar from './Bar.js'
// import Tattoo from './Tattoo.js'
// import Attraction from './Attraction.js'

class CreateItinerary extends React.Component {
    state = {
        lat: this.props.location.state.lat,
        lon: this.props.location.state.lon,
        trip_id: 1
    }

    render() { 
        return (
            <div>
                <Hotels trip_id={this.state.trip_id} lat={ this.state.lat } lon={ this.state.lon }/>
                {/* <Bar lat={ this.state.lat } lon={ this.state.lon }/> */}
                {/* <Tattoo lat={ this.state.lat } lon={ this.state.lon }/> */}
                {/* <Attraction lat={ this.state.lat } lon={ this.state.lon }/> */}
                {/* <Restaurant lat={ this.state.lat } lon={ this.state.lon }/> */}
            </div>
        );
    }
}


 
export default CreateItinerary;