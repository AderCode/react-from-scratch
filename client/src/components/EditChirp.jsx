import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom'
import Avatar from "./Avatar";

class EditChirp extends Component {
    constructor(props) {
        super(props);
        this.handlePut = this.handlePut.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            chirps: [],
            chirpText: ''
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let url = `/api/chirps/${id}`;
        fetch(url)
            .then(res => {
                // console.log("1st .then res = ", res);
                return res.json();
            })
            .then(obj => {
                // console.log("2nd .then obj = ", obj);
                this.setState({
                    chirpText: obj[0].text
                })
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
                                <input
                                    className="w-100"
                                    type="text"
                                    placeholder="Edit chirp here"
                                    onChange={(e) => this.handleInputChange(e.target.value)} />
                                <br />
                                <button
                                    className="btn btn-success mx-2"
                                    type="button"
                                    onClick={() => { this.handlePut(id) }}>
                                    Save
                                </button>
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => this.handleDelete(id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                );
                this.setState({
                    chirps: listChirps
                });
            });
    }

    handleInputChange(value) {
        this.setState({ chirpText: value });
    }

    handlePut(id) {
        let url = `/api/chirps/${id}`;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify({ text: this.state.chirpText }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
        console.log(`fetchPut(${id}) completed.`);
        window.location = `/${id}`;
    }

    handleDelete(id) {
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

export default EditChirp;
