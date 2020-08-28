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
        address: '',
        render: false
    }

    componentDidMount = async () => {
        const returnedHotel = await getBusinesses(this.props.lat, this.props.lon, this.state.keyword);
        this.setState({ hotels: returnedHotel.body })
        console.log(this.state.hotels);
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 4 seconds, set render to true
        }.bind(this), 2000);
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
            <section className={`${this.props.hotelsDone ? 'hidden' : 'not-hidden'}`}>
                <h3>Hotels</h3>
                <div className='category-container'>
                    {
                        
                        this.state.render === true ?
                        this.state.hotels.map((hotel) => {
                            return (
                                <div className='category-label' onClick={() => this.handleHotelPost(hotel)}>
                                    {hotel.image_url ? <img className='category-img' img src={hotel.image_url} alt={hotel.business_name}/> : <img className='category-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt="Not Found" />}
                                    <h2 className='category-h2'>{hotel.business_name}</h2>
                                    <h3 className='review-h2'>Rating:</h3>
                                    <p className='rating'>{hotel.rating} out of 5 on the Detestination Meter&#8482;</p>
                                    <h3 className='review-h2'>Review:</h3>
                                    <p className='review'>"{hotel.review}"</p>
                                </div>
                            )
                        })
                        : <div id="cover-spin"></div>
                    }
                </div>
            </section>
        );
    }
}


 
export default Hotels;