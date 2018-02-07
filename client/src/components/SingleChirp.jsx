import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom'
import Avatar from "./Avatar";

class SingleChirp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirps: []
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    let url = `/api/chirps/${id}`;
    fetch(url)
      .then(res => {
        console.log("1st .then res = ", res);
        return res.json();
      })
      .then(obj => {
        console.log("2nd .then obj = ", obj);
        let listChirps = (
          <div key={`${id}`}>
            <div className="card mt-1 mb-1">
              <div className="text-left mt-2">
                <div className="media ml-2">
                  <div className="d-inline">
                    <Avatar />
                  </div>
                  <div className="media-body ml-2 d-inline">
                    <h5 className="mt-0 d-inline mx-1">Name</h5>
                    <h6 className="mt-0 d-inline mx-1 text-muted">@Handle</h6>
                    <h6 className="mt-0 d-inline mx-1 text-muted">Time</h6>
                  </div>
                </div>
              </div>
              <div className="card-body text-left ml-5 pt-0">
                <p>{obj[0].text}</p>
                <Link
                  className="nav-link text-right"
                  to={`/${id}/edit`}>
                  Edit Chirp
                </Link>
              </div>
            </div>
          </div>
        );
        this.setState({
          chirps: listChirps
        });
      });
  }

  render() {
    // console.log("Final log this.state.chirps.text = ", this.state.chirps);
    return <Fragment>{this.state.chirps}</Fragment>;
  }
}

export default SingleChirp;
