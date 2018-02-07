import React, { Fragment } from "react";
import Avatar from "./Avatar";
import ChirpStyle from "./ChirpStyle";

class NewChirp extends React.Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
    this.fetchPost = this.fetchPost.bind(this);

    this.state = {
      chirps: [
        {
          name: "Aderhold",
          text: "I'm not sure how to React...",
          timestamp: "Jan 22",
          key: 0
        },
        {
          name: "Aderhold",
          text: "They see me chirpin', they hatin'!",
          timestamp: "Jan 22",
          key: 1
        },
        {
          name: "Aderhold",
          text: "OMG, Becky! He's such a chirp. #LevelUp",
          timestamp: "Jan 22",
          key: 2
        }
      ]
    };
  }

  // handleClick(event) {
  //   let chirpsArray = this.state.chirps;
  //   if (this._inputElement.value !== "") {
  //     chirpsArray.unshift({
  //       name: "Aderhold",
  //       text: this._inputElement.value,
  //       timestamp: "1m",
  //       key: Date.now()
  //     });
  //     this.setState({
  //       chirps: chirpsArray
  //     });
  //   }
  //   this._inputElement.value = "";
  //   event.preventDefault();
  //   console.log(chirpsArray);
  // }

  fetchPost(event) {
    let url = "/api/chirps/";
    event.preventDefault();
    let data = { text: this._inputElement.value };
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    console.log("fetchPost() completed. data = ", data);
    location.reload(false);
  }

  render() {
    return (
        <div className="col justify-content-lg-center border bg-white">
          <div className="form-group text-left">
            <h6 className="mt-3">
              <Avatar />
              <label className="ml-2">Create a Chirp:</label>
            </h6>
            <form onSubmit={this.fetchPost}>
              <input
                className="w-100"
                id="chirp-input"
                ref={a => {
                  this._inputElement = a;
                }}
                placeholder="What's happening?"
              />
              <div>
                <input
                  className="btn btn-primary w-100 mt-1"
                  type="submit"
                  value="Post"
                />
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default NewChirp;
