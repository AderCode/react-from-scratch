import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import ChirpStyle from "./ChirpStyle";
import NavBar from "./NavBar";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";
import SingleChirp from "./SingleChirp";
import EditChirp from "./EditChirp";
import UserMentions from "./UserMentions";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="text-center bg-light">
            <NavBar />
            <div className="container mt-3">
              <div className="row">
                <div className="col-lg-3">
                  <SideBarLeft />
                </div>
                <div className="col-lg-6">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:id" component={SingleChirp} />
                    <Route exact path="/:id/edit" component={EditChirp} />
                    <Route exact path="/mentions/:id" component={UserMentions} />
                  </Switch>
                </div>
                <div className="col-lg-3">
                  <SideBarRight />
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
