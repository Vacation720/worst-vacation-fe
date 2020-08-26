import React from 'react';
import { getBusinesses } from '../vacation-api.js'

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

    //when image url is empty, add stock image
    render() { 
        return (
            <div>
           {this.state.restaurants.map(restaurant => {
            return <div> 
            <img alt="whatever" src={ restaurant.image_url } />
            <p>{ restaurant.business_name } </p>
            <p> { restaurant.rating }</p>
           <p> { restaurant.review }</p>
            </div>
           }
            )}
            </div>
        );
    }
}


 
export default Restaurant;