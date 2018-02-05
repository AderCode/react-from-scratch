import React from 'react';

class Avatar extends React.Component {
    render() {
        return (
            <img className="border border-white rounded-circle"
            // src={require(`../srcImages/headshot-thumbnail.jpg`)}
            alt={this.props.name}
            style={{height: '50px', width: '50px'}}
            />
        )
    }
}

export default Avatar;