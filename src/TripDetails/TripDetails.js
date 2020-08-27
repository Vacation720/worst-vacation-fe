import React from 'react';
import { getItinerary } from '../vacation-api.js';

class TripDetails extends React.Component {
    state = {
        tripItem: []
    }
    componentDidMount = async () => {
        const tripData = await getItinerary(1);

        this.setState({
            tripItem: tripData.body
        })
    }

    render() { 
        console.log(this.state.tripItem)
        return (
            <div>
                {/* {this.state.tripItem.map(item => {
                    return (
                        <div>{item.name}</div>
                    )
                })} */}
            </div>
        );
    }
}
 
export default TripDetails;