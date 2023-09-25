import React from 'react';

// Components 
import SidePageL from './PageSides/SidePageL';
import SidePageR from './PageSides/SidePageR';
import Intro from './Intro.js';
import About from './About';
import Work from './Work';

const Home = () => {
    return (
        <div id='Container' className=''>
            <Intro />
            <About />
            <Work />
            <SidePageR />
            <SidePageL />
        </div>
    );
};

export default Home;