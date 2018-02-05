import React, { Component } from "react";

class Trending extends Component {
  render() {
    return (
      <div className="card mt-2 mb-5">
        <div className="card-body text-left">
          <h5 className="card-title">Trends for you</h5>
          <p className="card-text">
            <span className="text-primary">#Covalence</span><br />
            <span className="text-muted">1,000,000 chirps</span>
          </p>
          <p className="card-text">
            <span className="text-primary">#ReactJS</span><br />
            <span className="text-muted">42,000 chirps</span>
          </p>
          <p className="card-text">
            <span className="text-primary">#create-react-app</span><br />
            <span className="text-muted">23,000 chirps</span>
          </p>
          <p className="card-text">
            <span className="text-primary">#JSX</span><br />
            <span className="text-muted">13,000 chirps</span>
          </p>
          <p className="card-text">
            <span className="text-primary">#VSCode</span><br />
            <span className="text-muted">666 chirps</span>
          </p>
          <p className="card-text">
            <span className="text-primary">#Bootcamp</span><br />
            <span className="text-muted">333 chirps</span>
          </p>
          <p className="card-text">
            <span className="text-primary">#LevelUp</span><br />
            <span className="text-muted">1 chirp</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Trending;
