import React from "react";

class Avatar extends React.Component {
  render() {
    let picStyle;
    if (this.props.style) {
      picStyle = this.props.style;
    } else {
      picStyle = { height: '50px', width: '50px'}
    }
    return (
      <img
        className="border border-white rounded-circle"
        src="../srcImages/headshot-thumbnail.jpg"
        alt={this.props.name}
        style={picStyle}
      />
    );
  }
}

export default Avatar;
