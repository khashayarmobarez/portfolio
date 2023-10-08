import React from 'react';
import { Element } from 'react-scroll';

// Components 
import SidePageL from './PageSides/SidePageL';
import SidePageR from './PageSides/SidePageR';
import Intro from './Intro.js';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Classes from './Classes';
import Certificates from './Certificates';

const Home = () => {
    return (
        <div id='Container'>
            <Intro />

            <Element name="About"><About /></Element>
            <Element name="Work"><Work /></Element>
            <Element name="Certificates"><Certificates /></Element>
            <Element name="Contact"><Contact /></Element>
            <Element name="Classes"><Classes /></Element>

            <SidePageR />
            <SidePageL />
        </div>
    );
};

export default Home;