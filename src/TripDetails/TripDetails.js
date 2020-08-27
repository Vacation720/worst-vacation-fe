import React from 'react';
import { getItinerary } from '../vacation-api.js';

class TripDetails extends React.Component {
    state = {
        tripItem: []
    }
    componentDidMount = async () => {
        const tripData = await getItinerary(this.props.match.params.id);

        let newTripData = [];

        if (tripData.body.length > 5) {
            newTripData.push(tripData.body.slice(tripData.body.length - 5, tripData.body.length))
        }
        else {
            newTripData.push(tripData.body)
        }
        
        console.log(newTripData)

        this.setState({
            tripItem: newTripData
        })
    }

    render() { 
        console.log(this.state.tripItem)
            return (
            <div>
                {this.state.tripItem.map(array => {
                    return array.map(item => {
                        return <div>
                            <div>{item.business_name}</div>
                            {item.image_url ? <img src={item.image_url} alt={item.business_name}/> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt="Not Found" />}
                            <div>RATING: {item.rating}</div>
                            <div>"{item.review}"</div>
                            <div>{item.address ? item.address : "Unknown"}, {item.city}</div>
                            </div>
                    })
                })
            }
            </div>
        );
    }
}
 
export default TripDetails;