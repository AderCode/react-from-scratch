import React, { Component } from "react";
import Avatar from "./Avatar";
// import "../../UserInfo.css";

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Name6"
    };
  }

  render() {
    let bannerStyle = {
      maxHeight: '100px'
    }
    let profPicStyle = {
      height: '50px',
      width: '50px',
      bottom: '80px'
    }
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="../../srcImages/banner.JPG"
          style={bannerStyle}
          alt="Banner"
        />
        <div className="card-body pt-0 pb-0">
          <div className="position-absolute" style={profPicStyle}>
            <Avatar style={profPicStyle}/>
          </div>
          <div className="ml-5 text-left pl-3">
            <h4 className="card-text pb-0 mb-0">{this.state.name}</h4>
            <h6 className="text-muted pt-0 mt-0">@name6</h6>
          </div>
        </div>
        <div className="text-left">
          <div className="d-inline-block p-1 text-primary">
          <span className="text-muted mb-0 pl-2">Chirps</span><br />
            <span className="pl-2">3</span>
          </div>
          <div className="d-inline-block p-1 text-primary"><span className="text-muted mb-0">Following</span><br /><span>42</span></div>
          <div className="d-inline-block p-1 text-primary"><span className="text-muted mb-0">Followers</span><br /><span>23</span></div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
