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
        } else {
            newTripData.push(tripData.body)
        }
        
        this.setState({
            tripItem: newTripData
        })
    }

    render() { 
        console.log(this.state.tripItem)
            return (
            <main className="details-main">
                <h2 className='details-h2'>My Trip</h2>
                {this.state.tripItem.map(array => {
                    return array.map(item => {
                        return (
                            <div className="trip-thing">
                                <h1 className="name-detail">{item.business_name}</h1>
                                {item.image_url ? <img className="image-detail" src={item.image_url} alt={item.business_name}/> : <img className="image-detail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt="Not Found" />}
                                <div className='subsection-category'>
                                    <h3 className='subsection-h3'>DETESTINATION METER &#8482; :</h3>
                                    <p className='subsection-rating'>{item.rating}</p>
                                </div>
                                <div className='subsection-category'>
                                    <h3 className='subsection-h3'>Review</h3>
                                    <p>"{item.review}"</p>
                                </div>
                                <div className='subsection-category'>
                                    <h3 className='subsection-h3'>Address</h3>
                                    <p className='subsection-address'>{item.address ? item.address : "Unknown"}, {item.city}</p>
                                </div>
                            </div>
                        )
                    })
                })
            }
            </main>
        );
    }
}
 
export default TripDetails;