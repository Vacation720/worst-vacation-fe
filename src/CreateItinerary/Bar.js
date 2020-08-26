import React from 'react';
import { getBusinesses } from '../vacation-api.js'

class Bar extends React.Component {
    state = {
        keyword: 'worst bar',
        bars: [],
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
        const returnedBar = await getBusinesses(this.props.lat, this.props.lon, this.state.keyword);
        this.setState({ bars: returnedBar.body })
        console.log(this.state.bars);
    }

    //when image url is empty, add stock image
    render() { 
        return (
            <div>
           {this.state.bars.map(bar => {
            return <div> 
            <img alt="whatever" src={ bar.image_url } />
            <p>{ bar.business_name } </p>
            <p> { bar.rating }</p>
           <p> { bar.review }</p>
            </div>
           }
            )}
            </div>
        );
    }
}


 
export default Bar;