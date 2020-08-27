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
        address: ''
    }

    componentDidMount = async () => {
        const returnedAttraction = await getBusinesses(this.props.lat, this.props.lon, this.state.keyword);
        this.setState({ attractions: returnedAttraction.body })
        console.log(this.state.attractions);
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
            <div>
                {
                    this.state.attractions.map((attraction) => {
                        return <label onClick={() => this.handleAttractionPost(attraction)}> <h2>{attraction.business_name}</h2> </label>
                        })
                    }
            </div>
        );
    }
}


 
export default Attraction;