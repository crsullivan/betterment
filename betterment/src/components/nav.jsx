import React from 'react';
import './nav.css'

function nav() {

    
    return (
        <div id="navbar">
        <img src={require("./images/betterment.png")}></img>
        <h1>Betterment</h1>
            <div id="links"> 
                <a href="http://localhost:3000/login">Sign In</a>
                <a href="http://localhost:3000/register">Sign Up</a>
                <a href="http://localhost:3000/">Home</a>
            </div>
        </div>
    );
    
  }
  
  export default nav;