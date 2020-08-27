import React from 'react';
import { getChoices, deleteTrip } from '../vacation-api.js';

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

        const data = await getChoices(this.props.token)
    
        this.setState({ tripItem: data.body })
        }
    
    render() {
        return (
            <div>
                {
                    this.state.tripItem.map(subArray => {
                        return (
                            <div>
                                {console.log(subArray)}
                                <h2>hello</h2>
                                {
                                    subArray.map(item => {
                                        return (
                                            <>
                                                <div>{item.business_name}</div>
                                            </>
                                        )
                                    })
                                }
                                <button onClick={() => this.handleDelete(subArray[0].trip_id)}>Delete Trip</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Itineraries;