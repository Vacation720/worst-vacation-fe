import React from 'react';
import { getBusinesses, postChoice } from '../vacation-api.js'

class Bars extends React.Component {
    state = {
        keyword: 'bar',
        bars: [],
        city: '',
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

    handleBarsPost = async (bar) => {

        await this.setState({
            city: bar.city,
            business_name: bar.business_name,
            review: bar.review,
            rating: bar.rating,
            image_url: bar.image_url,
            trip_id: this.props.trip_id,
            address: bar.address
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
        
        await this.props.didBarsPost();
    }
    
    //when image url is empty, add stock image
    render() { 
        return (
            <div>
                {
                    this.state.bars.map((bar) => {
                        return <label onClick={() => this.handleBarsPost(bar)}> <h2>{bar.business_name}</h2> </label>
                        })
                    }
            </div>
        );
    }
}


 
export default Bars;