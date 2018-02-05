import React, { Component } from "react";
import WhoToFollow from './WhoToFollow'
import Copyrights from './Copyrights'

class SideBarRight extends Component {
render() {
    return (
      <div>
        <WhoToFollow />
        <Copyrights />
      </div>
    );
  }
}

export default SideBarRight;
