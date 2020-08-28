import React from 'react';
import { getChoices, deleteTrip } from '../vacation-api.js';
import './itineraries.css'

class Itineraries extends React.Component {
    state = {
        tripItem: []
    }
    componentDidMount = async () => {
        const tripData = await getChoices();
        let arr = [];

        for(let i = 0; i < tripData.body.length / 5; i++) {
            arr.push(tripData.body.slice(i * 5, i * 5 + 5));
        }

        this.setState({ tripItem: arr})
    }

    handleDelete = async (id) => {
        await deleteTrip(id);

        const tripData = await getChoices();
        let arr = [];

        for(let i = 0; i < tripData.body.length / 5; i++) {
            arr.push(tripData.body.slice(i * 5, i * 5 + 5));
        }

        this.setState({ tripItem: arr})
        }
    
    render() {
        return (
            <div className="i-category-container">
                {
                    this.state.tripItem.map((subArray, i) => {
                        return (
                            <div className="i-category-label">
                                {console.log(subArray)}
                                <div className="i-business-thing">
                                {
                                    subArray.map(item => {
                                        return (
                                            <div>
                                                <div className="i-category-h2">{item.business_name}</div>
                                                {item.image_url ? <img className="i-category-img" src={item.image_url} alt={item.business_name}/> : <img className="i-category-img"nbpm src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt="Not Found" />}                                            
                                            </div>
                                        )
                                    })
                                }
                                </div>
                                <button className="itinerary-button" onClick={() => this.handleDelete(subArray[0].trip_id)}>Delete Trip</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Itineraries;