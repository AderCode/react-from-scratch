import React from 'react';

  class Welcome extends React.Component {
    render() {
      return (
        <div>
            <h6 className="text-left ml-3">Welcome, {this.props.name} <a href="localhost:3000">[Log Out]</a></h6>
        </div>
      )
    }
  }

  

export default Welcome; 