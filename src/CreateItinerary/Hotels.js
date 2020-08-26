import React from 'react';
import { getBusinesses } from '../vacation-api.js'

class Hotels extends React.Component {
    state = {
        keyword: 'hotel',
        hotels: []
    }

    componentDidMount = async () => {
        const returnedHotel = await getBusinesses(this.props.lat, this.props.lon, this.state.keyword);
        this.setState({ hotels: returnedHotel.body })
        console.log(this.state.hotels);
    }

    //when image url is empty, add stock image
    render() { 
        return (
            <div>
           {this.state.hotels.map(hotel => {
            return <div> 
            <img alt="whatever" src={ hotel.image_url } />
            <p>{ hotel.business_name } </p>
            <p> { hotel.rating }</p>
           <p> { hotel.review }</p>
            </div>
           }
            )}
            </div>
        );
    }
}


 
export default Hotels;