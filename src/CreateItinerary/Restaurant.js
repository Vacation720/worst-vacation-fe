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
        setTimeout(function() {
            this.setState({render: true})
        }.bind(this), 2000);
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

    render() { 
        return (
            <section>
                <h3 className='category-h3'>Restaurants</h3>
                <div className='category-container'>
                    {
                        this.state.render === true ?
                        this.state.restaurants.map((restaurant) => {
                            return (
                                <div className='category-label' onClick={() => this.handleRestaurantPost(restaurant)}>
                                    {restaurant.image_url ? <img className='category-img' img src={restaurant.image_url} alt={restaurant.business_name}/> : <img className='category-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt="Not Found" />}
                                    <h2 className='category-h2'>{restaurant.business_name}</h2>
                                    <h3 className='review-h2'>Rating:</h3>
                                    <p className='rating'>{restaurant.rating} out of 5 on the Detestination Meter&#8482;</p>
                                    <h3 className='review-h2'>Review:</h3>
                                    <p className='review'>"{restaurant.review}"</p>
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

export default Restaurant;