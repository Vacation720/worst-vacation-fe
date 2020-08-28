import React from 'react';
import { getBusinesses, postChoice } from '../vacation-api.js'

class Tattoo extends React.Component {
    state = {
        keyword: 'tattoo',
        tattoos: [],
        city: '',
        business_name: '',
        review: '',
        rating: 0,
        image_url: '',
        trip_id: 0,
        address: '',
        render: false,
        fakeTattoos: [{
            "city": "Your Trip Destination",
            "business_name": "Booger's Tattoos",
            "business_id": "_I3Qog_lRHGlPs8cpP28YQ",
            "address": "123 Fake St.",
            "rating": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
            "review": "This place sucks!",
        },
        {
            "city": "Your Trip Destination",
            "business_name": "Tats by Stanley",
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
        const returnedTattoo = await getBusinesses(this.props.lat, this.props.lon, this.state.keyword);
        this.setState({ tattoos: returnedTattoo.body })
        console.log(this.state.tattoos);
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 4 seconds, set render to true
        }.bind(this), 2000);
    }



    handleTattooPost = async (tattoo) => {

        await this.setState({
            city: tattoo.city,
            business_name: tattoo.business_name,
            review: tattoo.review,
            rating: tattoo.rating,
            image_url: tattoo.image_url,
            trip_id: this.props.trip_id
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
        
        await this.props.didTattooPost();
    }
    
    //when image url is empty, add stock image
    render() { 
        return (
            <section className={`${this.props.tattooDone ? 'hidden' : 'not-hidden'}`}>
                <h3 className='category-h3'>Tattoo Shops</h3>
                <div className='category-container'>
                    {
                        this.state.render === true ?
                        this.state.tattoos.length === 0 ?
                        this.state.fakeTattoos.map((tattoo) => {
                            return (
                                <div className='category-label' onClick={() => this.handleTattooPost(tattoo)}>
                                    {tattoo.image_url ? <img className='category-img' img src={tattoo.image_url} alt={tattoo.business_name}/> : <img className='category-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt="Not Found" />}
                                    <h2 className='category-h2'>{tattoo.business_name}</h2>
                                    <h3 className='review-h2'>Rating:</h3>
                                    <p className='rating'>{tattoo.rating} out of 5 on the Detestination Meter&#8482;</p>
                                    <h3 className='review-h2'>Review:</h3>
                                    <p className='review'>"{tattoo.review}"</p>
                                </div>
                            )
                        })
                        :
                        this.state.tattoos.map((tattoo) => {
                            return (
                                <div className='category-label' onClick={() => this.handleTattooPost(tattoo)}>
                                    {tattoo.image_url ? <img className='category-img' img src={tattoo.image_url} alt={tattoo.business_name}/> : <img className='category-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt="Not Found" />}                                    
                                    <h2 className='category-h2'>{tattoo.business_name}</h2>
                                    <h3 className='review-h2'>Rating:</h3>
                                    <p className='rating'>{tattoo.rating} out of 5 on the Detestination Meter&#8482;</p>
                                    <h3 className='review-h2'>Review:</h3>
                                    <p className='review'>"{tattoo.review}"</p>
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


 
export default Tattoo;