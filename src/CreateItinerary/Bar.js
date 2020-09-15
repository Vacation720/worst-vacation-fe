import React from 'react';
import { getBusinesses, postChoice } from '../vacation-api.js'

// this is a good case for a simple functional component
const Bar = ({ bar }) => {
    return (
        <div className='category-label' onClick={() => this.handleBarsPost(bar)}>
            {bar.image_url ? <img className='category-img' img src={bar.image_url} alt={bar.business_name}/> : <img className='category-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" alt="Not Found" />}
            <h2 className='category-h2'>{bar.business_name}</h2>
            <h3 className='review-h2'>Rating:</h3>
            <p className='rating'>{bar.rating} out of 5 on the Detestination Meter&#8482;</p>
            <h3 className='review-h2'>Review:</h3>
            <p className='review'>"{bar.review}"</p>
        </div>
    )
};

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
        address: '',
        render: false,
        fakeBars: [{
            "city": "Your Trip Destination",
            "business_name": "NO BARS",
            "business_id": "_I3Qog_lRHGlPs8cpP28YQ",
            "address": "123 Fake St.",
            "rating": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
            "review": "This place sucks!",
        },
        {
            "city": "Your Trip Destination",
            "business_name": "Booger's Bar",
            "business_id": "_I3Qog_lRHGlPs8cpP28YQ",
            "address": "123 Fake St.",
            "rating": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
            "review": "This place sucks!",
        },
        {
            "city": "Your Trip Destination",
            "business_name": "Bar Land",
            "business_id": "_I3Qog_lRHGlPs8cpP28YQ",
            "address": "123 Fake St.",
            "rating": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
            "review": "This place sucks!",
        }]
    }

    componentDidMount = async () => {
        const returnedBar = await getBusinesses(this.props.lat, this.props.lon, this.state.keyword);
        this.setState({ bars: returnedBar.body })
        console.log(this.state.bars);
        setTimeout(function() {
            this.setState({render: true})
        }.bind(this), 2000);
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
    
    render() { 
        return (
            <section className={`${this.props.barsDone ? 'hidden' : 'not-hidden'}`}>
                <h3 className='category-h3'>Bars</h3>
                <div className='category-container'>
                    {
                        // this feels a bit weird... I bet you could have rustled together a way to do this without the 'render' and 'fakeBars' state notches. Also, I tend to dislike nested terneries
                        this.state.render === true ?
                        this.state.bars.length === 0 ?
                        this.state.fakeBars.map(<Bar bar={bar}/>)
                        :
                        this.state.bars.map(<Bar bar={bar}/>)
                        : <div id="cover-spin"></div>
                    }
                                   
                </div>

            </section>
        )
    }
}

export default Bars;