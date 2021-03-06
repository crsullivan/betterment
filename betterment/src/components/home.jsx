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
            <div className="Bottom-div">
                <img alt="Picture of code" src={require("../utils/images/coding.jpg")}></img>
                <img alt="Picture of archery" src={require("../utils/images/archery.jpg")}></img>
                <img alt="Picture of carpentry" src={require("../utils/images/carpentry.jpg")}></img>
            </div>
        </div>
    );
  }
  
  export default home;