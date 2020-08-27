import React from 'react';
import { getBusinesses, postChoice } from '../vacation-api.js'
import './create-itinerary.css';

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
            <section>
                <h3>Hotels</h3>
                <div className='hotel-container'>
                    {
                        this.state.hotels.map((hotel) => {
                            return (
                                <div className='hotel-label' onClick={() => this.handleHotelPost(hotel)}>
                                    <img className='hotel-img' alt={hotel.image_url} src={hotel.image_url} />
                                    <h2 className='category-h2'>{hotel.business_name}</h2>
                                    <p className='rating'>Rating: {hotel.rating}</p>
                                    <h3 className='review-h2'>Review</h3>
                                    <p className='review'>"{hotel.review}"</p>
                                </div>
                            )
                        })
                    }
                </div>

            </section>
        );
    }
}


 
export default Hotels;