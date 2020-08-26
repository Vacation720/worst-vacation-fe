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
        address: ''
    }

    componentDidMount = async () => {
        const returnedTattoo = await getBusinesses(this.props.lat, this.props.lon, this.state.keyword);
        this.setState({ tattoos: returnedTattoo.body })
        console.log(this.state.tattoos);
    }

    handleTattooPost = async (tattoo) => {

        await this.setState({
            city: tattoo.city,
            business_name: tattoo.business_name,
            review: tattoo.review,
            rating: tattoo.rating,
            image_url: tattoo.image_url,
            trip_id: this.props.trip_id,
            address: tattoo.address
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
            <div>
                {
                    this.state.tattoos.map((tattoo) => {
                        return <label onClick={() => this.handleTattooPost(tattoo)}> <h2>{tattoo.business_name}</h2> </label>
                        })
                    }
            </div>
        );
    }
}


 
export default Tattoo;