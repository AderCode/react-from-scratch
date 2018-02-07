import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Avatar from "./Avatar"

class NavBar extends Component {
  render() {
    return (
      <div className="border-bottom">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link disabled" to="#">
                    Memories
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link disabled" to="#">
                    Notifications
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link disabled" to="#">
                    Messages
                </Link>
                </li>
              </ul>
            <a className="mx-auto" href="localhost:3000">
              <img
                className=""
                src='../srcImages/chirpers_text.png'
                width="30"
                height="30"
                alt="Chirper"
              />
            </a>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control"
                type="search"
                placeholder="Search Chirper"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 mr-2"
                type="submit"
              >
                Q
              </button>
            </form>
                <Avatar />
                <button className="btn btn-primary ml-2">Chirp</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
