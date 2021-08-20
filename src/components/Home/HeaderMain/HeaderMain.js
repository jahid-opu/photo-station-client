import React from 'react';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="pt-3 d-flex align-items-center hero-banner">
        <div className="col-md-6 offset-md-1">
            <h6>YOUR IMAGINATION</h6>
            <h1 className="my-3">WELCOME TO<br/> PHOTO STATION</h1>
            <p>a creative lifestyle photo studio making emotional photography communicate a story.</p>
            <button className="btn btn-primary">Discover More</button>

        </div>
        <div className="col-md-6">

        </div>
    </main>
    );
};

export default HeaderMain;