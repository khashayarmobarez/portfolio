import React, { useState } from 'react';
import styles from './Navbar.module.css'
import 'animate.css'

import logo from '../../media/SVG/K-logo.svg'
import myPicture from '../../media/Pics/portfolio-photo.jpg'


const Navbar = () => {

    
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsOpen(!isOpen);
  };



    return (
        <div className={`animate__animated animate__bounceInDown animate__delay-0s  ${styles.Navbar} `}>


            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt='logo'/>
            </div>

            <ul className={`${styles.LinksContainer} ${isOpen ? styles.open : ''}`}>
                <li className={`${styles.Navlink} ${styles.portfolioPic}`}>
                    <img src={myPicture} alt='myPicture' className={styles.pic} />
                </li>
                <li className={`${styles.Navlink} ${styles.fancy}`}>
                        <span className={styles.topKey}></span>
                        <span className={styles.text}><a href='/'>Resume</a></span>
                        <span className={styles.bottomKey1}></span>
                        <span className={styles.bottomKey2}></span>
                </li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><a href='/'>About</a></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><a href='/'>Work</a></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><a href='/'>Certificates</a></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><a href='/'>Classes</a></li>
            </ul>

            {/* hamburger */}
            <label className={styles.burger} htmlFor="burger" >
                <input id="burger" type="checkbox" onChange={handleCheckboxChange}/>
                    <span></span>
                    <span></span>
                    <span></span>
            </label>

        </div>
    );
};

export default Navbar;