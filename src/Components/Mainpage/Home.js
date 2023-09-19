import React from 'react';
import styles from './Home.module.css'
import SidePageL from './PageSides/SidePageL';
import SidePageR from './PageSides/SidePageR';

const Home = () => {
    return (
        <div className={styles.container}>
            <SidePageL />
            <SidePageR />
        </div>
    );
};

export default Home;