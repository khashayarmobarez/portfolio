import React from 'react';
import styles from './Navbar.module.css'
import 'animate.css'

import logo from '../../media/SVG/K-logo.svg'
import myPicture from '../../media/Pics/portfolio-photo.jpg'


const Navbar = () => {
    return (
        <div className={`animate__animated animate__bounceInDown animate__delay-0s ${styles.Navbar} `}>

            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt='logo'/>
            </div>

            <ul className={styles.LinksContainer}>
                <li className={`${styles.Navlink} ${styles.portfolioPic}`}>
                    <img src={myPicture} alt='myPicture' className={styles.pic} />
                </li>
                <li className={`${styles.Navlink} ${styles.fancy}`}>
                    <a href='/'>
                        <span className={styles.topKey}></span>
                        <span className={styles.text}>Resume</span>
                        <span className={styles.bottomKey1}></span>
                        <span className={styles.bottomKey2}></span>
                    </a>
                </li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><a href='/'>About</a></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><a href='/'>work</a></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><a href='/'>Certificates</a></li>
            </ul>

        </div>
    );
};

export default Navbar;