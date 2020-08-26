import React from 'react';
import { getBusinesses, postChoice } from '../vacation-api.js'

class Hotels extends React.Component {
    state = {
        keyword: 'hotel',
        hotels: [],
        city: '',
        business_name: '',
        review: '',
        rating: 0,
        image_url: '',
        trip_id: 0,
        address: ''
    }

    componentDidMount = async () => {
        const returnedHotel = await getBusinesses(this.props.lat, this.props.lon, this.state.keyword);
        this.setState({ hotels: returnedHotel.body })
        console.log(this.state.hotels);
    }

    handleHotelPost = async (hotel) => {

        await this.setState({
            city: hotel.city,
            business_name: hotel.business_name,
            review: hotel.review,
            rating: hotel.rating,
            image_url: hotel.image_url,
            trip_id: this.props.trip_id,
            address: hotel.address
        })

        await postChoice({
            city: this.state.city,
            business_name: this.state.business_name,
            review: this.state.review,
            rating: this.state.rating,
            image_url: this.state.image_url,
            trip_id: this.state.trip_id,
            address: this.state.address
        })
        
        await this.props.didHotelsPost();
    }
    
    //when image url is empty, add stock image
    render() { 
        return (
            <div>
                {
                    this.state.hotels.map((hotel) => {
                        return <label onClick={() => this.handleHotelPost(hotel)}> <h2>{hotel.business_name}</h2> </label>
                        })
                    }
            </div>
        );
    }
}


 
export default Hotels;