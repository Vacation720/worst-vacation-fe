import React from 'react';
import { getItinerary } from '../vacation-api.js';
import './trip-details.css'

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
            <main className="details-main">
                {this.state.tripItem.map(array => {
                    return array.map(item => {
                        return <div className="trip-thing">
                            <div className="name-detail">{item.business_name}</div>
                            {item.image_url ? <img className="image-detail" src={item.image_url} alt={item.business_name}/> : <img className="image-detail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt="Not Found" />}
                            <div className="rating-detail">DETESTINATION METER &#8482; : {item.rating}</div>
                            <div className="review-detail">"{item.review}"</div>
                            <div className="address-detail">{item.address ? item.address : "Unknown"}, {item.city}</div>
                            </div>
                    })
                })
            }
            </main>
        );
    }
}
 
export default TripDetails;