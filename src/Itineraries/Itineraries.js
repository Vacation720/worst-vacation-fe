import React from 'react';
import { getChoices } from '../vacation-api.js';

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
        console.log(arr);
        this.setState({ tripItem: arr})
    }
    
    render() { 
        console.log(this.state.tripItem)
        return (
            <div>
            {this.state.tripItem.map(function (subArray) {
                return ( subArray.map(item => {
                    return <div>{item.business_name}</div>
                }) )
            })}
        </div>
        );
    }
}
 
export default Itineraries;