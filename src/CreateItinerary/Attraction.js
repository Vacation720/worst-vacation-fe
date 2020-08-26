import React from 'react';
import { getBusinesses } from '../vacation-api.js'

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

    //when image url is empty, add stock image
    render() { 
        return (
            <div>
           {this.state.attractions.map(attraction => {
            return <div> 
            <img alt="whatever" src={ attraction.image_url } />
            <p>{ attraction.business_name } </p>
            <p> { attraction.rating }</p>
           <p> { attraction.review }</p>
            </div>
           }
            )}
            </div>
        );
    }
}


 
export default Attraction;