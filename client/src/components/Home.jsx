import React, { Fragment } from 'react';
import NewChirp from "./NewChirp";
import ChirpStyle from "./ChirpStyle";

let Home = (props) => {
    return (
        <Fragment>
            <NewChirp />
            <ChirpStyle />
        </Fragment>
    )
}

export default Home