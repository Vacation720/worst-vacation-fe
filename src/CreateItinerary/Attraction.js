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
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/h7ZjLEr2Okc8OPSbgSGKaQ/o.jpg",
            "review": "This place sucks!",
        },
        {
            "city": "Your Trip Destination",
            "business_name": "Pyramids of Giza",
            "business_id": "_I3Qog_lRHGlPs8cpP28YQ",
            "address": "123 Fake St.",
            "rating": 1,
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/h7ZjLEr2Okc8OPSbgSGKaQ/o.jpg",
            "review": "This place sucks!",
        },
        {
            "city": "Your Trip Destination",
            "business_name": "Local Jail",
            "business_id": "_I3Qog_lRHGlPs8cpP28YQ",
            "address": "123 Fake St.",
            "rating": 1,
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/h7ZjLEr2Okc8OPSbgSGKaQ/o.jpg",
            "review": "This place sucks!",
        }]
    }

    componentDidMount = async () => {
        const returnedAttraction = await getBusinesses(this.props.lat, this.props.lon, this.state.keyword);
        this.setState({ attractions: returnedAttraction.body })
        console.log(this.state.attractions);
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 4 seconds, set render to true
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
        

    //when image url is empty, add stock image
    render() { 
        return (
            <section className={`${this.props.attractionDone ? 'hidden' : 'not-hidden'}`}>
                <h3>Attractions</h3>
                <div className='category-container'>
                    {
                        this.state.render === true ?
                        this.state.attractions.length === 0 ?
                        this.state.fakeAttractions.map((attraction) => {
                            return (
                                <div className='category-label' onClick={() => this.handleAttractionPost(attraction)}>
                                    <img className='category-img' alt={attraction.image_url} src={attraction.image_url} />
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
                                    <img className='category-img' alt={attraction.image_url} src={attraction.image_url} />
                                    <h2 className='category-h2'>{attraction.business_name}</h2>
                                    <h3 className='review-h2'>Rating:</h3>
                                    <p className='rating'>{attraction.rating} out of 5 on the Detestination Meter&#8482;</p>
                                    <h3 className='review-h2'>Review:</h3>
                                    <p className='review'>"{attraction.review}"</p>
                                </div>
                            )
                        })
                        : null
                    }
                                   
                </div>

            </section>
        )
    }
}


 
export default Attraction;