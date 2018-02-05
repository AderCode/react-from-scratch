import React, { Component } from "react";
import UserInfo from "./UserInfo";
import Trending from "./Trending";

class SideBarLeft extends Component {
render() {
    return (
      <div>
        <UserInfo />
        <Trending />
      </div>
    );
  }
}

export default SideBarLeft;
