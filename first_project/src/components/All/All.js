import React from 'react';

import Home from './../Home/Home'
import About from './../About/About'
import Profile from './../Profile/Profile'
import Work from './../Work/Work'
import Portofolio from './../Portofolio/Portofolio'
import Social from './../Socialmedia/Social'

function All() {
    return (
        <div className="App">
            <Home />
            <About />
            <Work />
            <Profile />
            <Portofolio />
            <Social />
        </div>
    );
}

export default All;
