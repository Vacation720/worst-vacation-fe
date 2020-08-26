import React from 'react';
import { getBusinesses } from '../vacation-api.js'

class Tattoo extends React.Component {
    state = {
        keyword: 'tattoo',
        tattoos: [],
        city: '',
        category: '',
        business_type: '',
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

    //when image url is empty, add stock image
    render() { 
        return (
            <div>
           {this.state.tattoos.map(tattoo => {
            return <div> 
            <img alt="whatever" src={ tattoo.image_url } />
            <p>{ tattoo.business_name } </p>
            <p> { tattoo.rating }</p>
           <p> { tattoo.review }</p>
            </div>
           }
            )}
            </div>
        );
    }
}


 
export default Tattoo;