import React, { useState } from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-scroll';
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
                
                <li className={`${styles.Navlink} ${styles.navRoute}`}><Link to="About" smooth={true} duration={700}>About</Link></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><Link to="Work" smooth={true} duration={1000}>Work</Link></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><Link to="Contact" smooth={true} duration={1300}>Contact</Link></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><Link to="Classes" smooth={true} duration={1600}>Classes</Link></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><Link to="Certificates" smooth={true} duration={1900}>Certificates</Link></li>
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