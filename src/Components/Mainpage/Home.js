import React from 'react';
import { Element } from 'react-scroll';

// Components 
import SidePageL from './PageSides/SidePageL';
import SidePageR from './PageSides/SidePageR';
import Intro from './Intro.js';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Articles from './Articles.js';
import Certificates from './Certificates';

const Home = () => {
    return (
        <div id='Container'>
            <Intro />

            <Element name="About"><About /></Element>
            <Element name="Work"><Work /></Element>
            <Element name="Certificates"><Certificates /></Element>
            <Element name="Contact"><Contact /></Element>
            <Element name="Articles"><Articles /></Element>

            <SidePageR />
            <SidePageL />
        </div>
    );
};

export default Home;