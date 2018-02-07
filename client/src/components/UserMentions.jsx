import React, { Component, Fragment } from "react";
import Avatar from "./Avatar";

class UserMentions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirps: []
    };
  }

  componentDidMount() {
    let url = `/api/mentions/${this.props.match.params.id}`;
    // if (this.props.match.params.id) {
    //   return (url = `/api/chirps/${this.props.match.params.id}`);
    // }
    fetch(url)
      .then(res => {
        console.log("1st .then res = ", res);
        return res.json();
      })
      .then(arr => {
        console.log("2nd .then obj = ", arr[0]);
        let listChirps = Object.keys(arr[0]).map(id => {
        //   console.log(`obj[${id}.text = ]`, arr[id].text);
          console.log('arr[0][id] = ', arr[0][id]);
          return (
            <div key={`${arr[0][id].id}`} onClick={()=>{window.location = `/${arr[0][id].id}`}}>
              <div className="card mt-1 mb-1">
                <div className="text-left mt-2">
                  <div className="media ml-2">
                    <div className="d-inline">
                      <Avatar />
                    </div>
                    <div className="media-body ml-2 d-inline">
                      <h5 className="mt-0 d-inline mx-1">Name_Holder</h5>
                      <h6 className="mt-0 d-inline mx-1 text-muted">@Handle_Holder</h6>
                      <h6 className="mt-0 d-inline mx-1 text-muted">Time_Holder</h6>
                    </div>
                  </div>
                </div>
                <div className="card-body text-left ml-5 pt-0">
                  {arr[0][id].text}
                </div>
              </div>
            </div>
          );
        });
        this.setState({ chirps: listChirps });
      });
  }

  render() {
    // console.log("Final log this.state.chirps.text = ", this.state.chirps.text);
    return <Fragment>{this.state.chirps}</Fragment>;
  }
}

export default UserMentions;

{
  /* <div>{this.state.chirpsList.map(chirp => { <Fragment>{chirp.toString()}</Fragment> })}</div> */
}
