import React from 'react';
import { getChoices } from '../vacation-api.js';

class Itineraries extends React.Component {
    state = {
        tripItem: []
    }
    componentDidMount = async () => {
        const tripData = await getChoices();
        let arr =[]

        for(let i = 0; i < tripData.body.length; i++) {
            if(tripData.body[i].trip_id === 1) {
                arr.push(tripData.body[i])
            }
        }

        this.setState({ tripItem: arr})
    }
    
    render() { 
        console.log(this.state.tripItem)
        return (
            <div>
                {this.state.tripItem.map(item => {
                    return (
                        <div>{item.business_name}</div>
                    )
                })}
            </div>
        );
    }
}
 
export default Itineraries;