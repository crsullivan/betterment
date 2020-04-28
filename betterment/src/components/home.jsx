import React from 'react';
import './home.css'

function home() {
    return (
        <div className="Home">
            <div className="Top-div">
                <img src={require("./images/betterment.png")}></img>
                <h1>Welcome To Betterment</h1>
            </div>
            <div className="Mid-div">
                <h1>Betterment is a tool for creating, honing and keeping track of your skills. The idea is to better yourself, just a little bit every day. Put in the reps, harvest the rewards. End societal reliance on push-button results, they don't work.</h1>
            </div>
        </div>
    );
  }
  
  export default home;