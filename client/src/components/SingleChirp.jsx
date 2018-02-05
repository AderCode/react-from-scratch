import React, { Component, Fragment } from "react";
import  { Redirect } from 'react-router-dom'
import Avatar from "./Avatar";

class SingleChirp extends Component {
  constructor(props) {
    super(props);
    this.fetchPut = this.fetchPut.bind(this);
    this.fetchDelete = this.fetchDelete.bind(this);

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
            <div>
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
                      <button
                        className="btn btn-danger"
                        onClick={()=>this.fetchDelete(id)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body text-left ml-5 pt-0">
                  <p>{obj.text}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target={`#modal${id}`}
                  >
                    Edit Chirp
                  </button>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id={`modal${id}`}
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Edit Chirp ID: {id}
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <input
                      type="text"
                      className="form-control my-1"
                      ref={a => {
                        this._inputElement = a;
                      }}
                      placeholder={`${obj.text}`}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => this.fetchPut(id)}
                      data-dismiss="modal"
                      className="btn btn-primary"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        this.setState({ chirps: listChirps });
      });
  }

  fetchPut(id) {
    let url = `/api/chirps/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({ text: this._inputElement.value }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    console.log(`fetchPut(${id}) completed.`);
    location.reload(false);
  }

  fetchDelete(id) {
    let url = `/api/chirps/${id}`;
    fetch(url, {
      method: "DELETE"
    });
    window.location = '/';
  }

  render() {
    console.log("Final log this.state.chirps.text = ", this.state.chirps);
    return <Fragment>{this.state.chirps}</Fragment>;
  }
}

export default SingleChirp;
