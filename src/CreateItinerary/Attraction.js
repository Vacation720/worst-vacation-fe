import React from 'react';
import { getBusinesses, postChoice } from '../vacation-api.js'

class Attraction extends React.Component {
    state = {
        keyword: 'attraction',
        attractions: [],
        city: '',
        business_name: '',
        review: '',
        rating: 0,
        image_url: '',
        trip_id: 0,
        address: '',
        render: false,
        fakeAttractions: [{
            "city": "Your Trip Destination",
            "business_name": "There are no attractions in your area!",
            "business_id": "_I3Qog_lRHGlPs8cpP28YQ",
            "address": "123 Fake St.",
            "rating": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
            "review": "This place sucks!",
        },
        {
            "city": "Your Trip Destination",
            "business_name": "Pyramids of Giza",
            "business_id": "_I3Qog_lRHGlPs8cpP28YQ",
            "address": "123 Fake St.",
            "rating": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
            "review": "This place sucks!",
        },
        {
            "city": "Your Trip Destination",
            "business_name": "Local Jail",
            "business_id": "_I3Qog_lRHGlPs8cpP28YQ",
            "address": "123 Fake St.",
            "rating": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
            "review": "This place sucks!",
        }]
    }

    componentDidMount = async () => {
        const returnedAttraction = await getBusinesses(this.props.lat, this.props.lon, this.state.keyword);
        this.setState({ attractions: returnedAttraction.body })
        console.log(this.state.attractions);
        setTimeout(function() {
            this.setState({render: true})
        }.bind(this), 2000)
    }

    handleAttractionPost = async (attraction) => {

        await this.setState({
            city: attraction.city,
            business_name: attraction.business_name,
            review: attraction.review,
            rating: attraction.rating,
            image_url: attraction.image_url,
            trip_id: this.props.trip_id,
            address: attraction.address
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
        
        await this.props.didAttractionPost();
    }
        
    render() { 
        return (
            <section className={`${this.props.attractionDone ? 'hidden' : 'not-hidden'}`}>
                <h3 className='category-h3'>Attractions</h3>
                <div className='category-container'>
                    {
                        this.state.render === true ?
                        this.state.attractions.length === 0 ?
                        this.state.fakeAttractions.map((attraction) => {
                            return (
                                <div className='category-label' onClick={() => this.handleAttractionPost(attraction)}>
                                    {attraction.image_url ? <img className='category-img' img src={attraction.image_url} alt={attraction.business_name}/> : <img className='category-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt="Not Found" />}
                                    <h2 className='category-h2'>{attraction.business_name}</h2>
                                    <h3 className='review-h2'>Rating:</h3>
                                    <p className='rating'>{attraction.rating} out of 5 on the Detestination Meter&#8482;</p>
                                    <h3 className='review-h2'>Review:</h3>
                                    <p className='review'>"{attraction.review}"</p>
                                </div>
                            )
                        })
                        :
                        this.state.attractions.map((attraction) => {
                            return (
                                <div className='category-label' onClick={() => this.handleAttractionPost(attraction)}>
                                    {attraction.image_url ? <img className='category-img' img src={attraction.image_url} alt={attraction.business_name}/> : <img className='category-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt="Not Found" />}
                                    <h2 className='category-h2'>{attraction.business_name}</h2>
                                    <h3 className='review-h2'>Rating:</h3>
                                    <p className='rating'>{attraction.rating} out of 5 on the Detestination Meter&#8482;</p>
                                    <h3 className='review-h2'>Review:</h3>
                                    <p className='review'>"{attraction.review}"</p>
                                </div>
                            )
                        })
                        : <div id="cover-spin"></div>
                    }
                                   
                </div>

            </section>
        )
    }
}

export default Attraction;