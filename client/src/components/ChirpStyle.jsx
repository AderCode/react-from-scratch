import React, { Component, Fragment } from "react";
import Avatar from "./Avatar";
import { Link } from 'react-router-dom';

class ChirpStyle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirps: []
    };
  }

  componentDidMount() {
    let url = `/api/chirps/`;
    // if (this.props.match.params.id) {
    //   return (url = `/api/chirps/${this.props.match.params.id}`);
    // }
    fetch(url)
      .then(res => {
        console.log("1st .then res = ", res);
        return res.json();
      })
      .then(obj => {
        console.log("2nd .then obj = ", obj);
        let listChirps = Object.keys(obj).map(id => {
          console.log(`obj[${id}.text = ]`, obj[id].text);
          return (
            <div key={`${obj[id].id}`}>
              <div className="card mt-1 mb-1">
                <div className="text-left mt-2">
                  <div className="media ml-2">
                    <div className="d-inline">
                      <Avatar />
                    </div>
                    <div className="media-body ml-2 d-inline">
                      <h5 className="mt-0 d-inline mx-1">
                        <Link 
                        style={{ color: 'inherit' }}
                        to={`/mentions/${obj[id].userid}`}>
                          Name{obj[id].userid}
                        </Link>
                      </h5>
                      <h6 className="mt-0 d-inline mx-1 text-muted">@Handle</h6>
                      <h6 className="mt-0 d-inline mx-1 text-muted">Time</h6>
                    </div>
                  </div>
                </div>
                <Link style={{ color: 'black' }} to={`/${obj[id].id}`}>
                  <div className="card-body text-left ml-5 pt-0">
                    {obj[id].text}
                  </div>
                </Link>
              </div>
            </div>
          );
        });
        this.setState({ chirps: listChirps });
      });
  }

  render() {
    return <Fragment>{this.state.chirps}</Fragment>;
  }
}

export default ChirpStyle;
