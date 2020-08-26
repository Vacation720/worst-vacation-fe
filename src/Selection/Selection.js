import React from 'react';

class Selection extends React.Component {
    render() { 
        return (
            <div>
                hello
                {console.log(this.props.location.state.lon)}
            </div>
        );
    }
}
 
export default Selection;