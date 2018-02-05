import React, { Component } from "react";

class WhoToFollow extends Component {
  render() {
    return (
      <div className="card text-left">
        <div className="card-body">
          <h5 className="card-title d-inline">Who to follow</h5>
          <span className="text-primary ml-2">View all</span>
        </div>
        <div className="border-bottom">
          <div className="d-inline ml-1">
            {/* <img src={require(`../srcImages/covalence.jpg`)} alt="icon" /> */}
          </div>
          <div className="d-inline pl-2">
            <span>Covalence</span>
            <span className="text-muted ml-1">@Covalence-io</span>
          </div>
          <br />
          <div className="d-inline ml-5 pl-5">
            <button className="btn btn-primary mx-auto mb-2">Follow</button>
          </div>
        </div>
        <div className="border-bottom mt-2">
          <div className="d-inline">
            {/* <img src={require(`../srcImages/apps.ico`)} alt="icon" /> */}
          </div>
          <div className="d-inline pl-2">
            <span>ReactJS</span>
            <span className="text-muted ml-1">@ReactJS</span>
          </div>
          <br />
          <div className="d-inline ml-5 pl-5">
            <button className="btn btn-primary mx-auto mb-2">Follow</button>
          </div>
        </div>
        <div className="border-bottom mt-2">
          <div className="ml-1 d-inline">
            {/* <img src={require(`../srcImages/test-icon.jpg`)} alt="icon" /> */}
          </div>
          <div className="d-inline pl-2">
            <span>Paul Dobbs</span>
            <span className="text-muted ml-1">@PaulyD</span>
          </div>
          <br />
          <div className="d-inline ml-5 pl-5">
            <button className="btn btn-primary mx-auto mb-2">Follow</button>
          </div>
        </div>
        <div><h6 className="text-primary text-center mt-1">Find people you know</h6></div>
      </div>
    );
  }
}

export default WhoToFollow;
