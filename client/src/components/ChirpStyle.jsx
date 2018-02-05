import React from "react";
import Avatar from "./Avatar";

 const ChirpStyle = (props) => {
  
  let listChirps = props.chirps.map((chirp) => {
  
  return (
      <div key={chirp.key} className="card mt-1 mb-1">
        <div className="text-left mt-2">
          <div className="media ml-2">
          <div className="d-inline">
            <Avatar />
            </div>
            <div className="media-body ml-2 d-inline">
              <h5 className="mt-0 d-inline mx-1">{chirp.name}</h5>
              <h6 className="mt-0 d-inline mx-1 text-muted">@MatthewAderhold</h6>
              <h6 className="mt-0 d-inline mx-1 text-muted">{chirp.timestamp}</h6>
            </div>
          </div>
        </div>
        <div className="card-body text-left ml-5 pt-0">
          {chirp.text}
        </div>
      </div>
    )
  });
   return (
     <div>{listChirps}</div>
   )
}


export default ChirpStyle;