import React, { Component } from "react";
import NewChirp from "./NewChirp";
import NavBar from "./NavBar";
import SideBarLeft from "./SideBarLeft"
import SideBarRight from "./SideBarRight"

class App extends Component {
  render() {
    return (
      <div className="text-center bg-light">
        <NavBar />
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-3">
              <SideBarLeft />
            </div>
            <div className="col-lg-6">
              <NewChirp />
            </div>
            <div className="col-lg-3">
            <SideBarRight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
