import React from 'react';
import { getBusinesses, postChoice } from '../vacation-api.js'

class Restaurant extends React.Component {
    state = {
        keyword: 'worst restaurant',
        restaurants: [],
        city: '',
        business_name: '',
        review: '',
        rating: 0,
        image_url: '',
        trip_id: 0,
        address: ''
    }

    componentDidMount = async () => {
        const returnedRestaurant = await getBusinesses(this.props.lat, this.props.lon, this.state.keyword);
        this.setState({ restaurants: returnedRestaurant.body })
        console.log(this.state.restaurants);
    }

    handleRestaurantPost = async (restaurant) => {

        await this.setState({
            city: restaurant.city,
            business_name: restaurant.business_name,
            review: restaurant.review,
            rating: restaurant.rating,
            image_url: restaurant.image_url,
            trip_id: this.props.trip_id,
            address: restaurant.address
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
        
        await this.props.didRestaurantPost();
    }

    //when image url is empty, add stock image
    render() { 
        return (
            <div>
                {
                    this.state.restaurants.map((restaurant) => {
                        return <label onClick={() => this.handleRestaurantPost(restaurant)}> <h2>{restaurant.business_name}</h2> </label>
                        })
                    }
            </div>
        );
    }
}


 
export default Restaurant;