import React from 'react';

// Components 
import SidePageL from './PageSides/SidePageL';
import SidePageR from './PageSides/SidePageR';
import Intro from './Intro.js';
import About from './About';

const Home = () => {
    return (
        <div id='Container' className=''>
            <Intro />
            <About />
            <SidePageR />
            <SidePageL />
        </div>
    );
};

export default Home;