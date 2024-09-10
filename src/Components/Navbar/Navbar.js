import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-scroll';
import 'animate.css'

import logo from '../../media/SVG/K-logo.svg'
import myPicture from '../../media/Pics/portfolio-photo.jpeg'


const Navbar = () => {

    
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('scrollingUp');

  const handleCheckboxChange = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    document.getElementById('burger').click();
  }

    // for scrollin effects
    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            let st = window.scrollY || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                setScrollDirection('scrollingDown');
            } else {
                setScrollDirection('scrollingUp');
            }
            lastScrollTop = st <= 0 ? 0 : st;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <div className={`animate__animated animate__bounceInDown animate__delay-0s  ${styles.Navbar} ${styles[scrollDirection]} `}>


            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt='logo'/>
            </div>

            <ul className={`${styles.LinksContainer} ${isOpen ? styles.open : ''}`}>
                <li className={`${styles.Navlink} ${styles.portfolioPic}`}>
                    <img src={myPicture} alt='myPicture' className={styles.pic} />
                </li>
                <li className={`${styles.Navlink} ${styles.fancy}`}>
                    <a href='https://drive.google.com/file/d/15fF7W1fYNY9n1Qvdn4IE0XKvDlxkYmKt/view?usp=drive_link' rel='noreferrer' target="_blank">
                        <span className={styles.topKey}></span>
                        <span className={styles.text}>Resume</span>
                        <span className={styles.bottomKey1}></span>
                        <span className={styles.bottomKey2}></span>
                    </a>
                </li>
                
                <li className={`${styles.Navlink} ${styles.navRoute}`}><Link to="About" smooth={true} duration={700} onClick={closeNav}>About</Link></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><Link to="Work" smooth={true} duration={1000} onClick={closeNav}>Work</Link></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><Link to="Certificates" smooth={true} duration={1900} onClick={closeNav}>Certificates</Link></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><Link to="Contact" smooth={true} duration={1300} onClick={closeNav}>Contact</Link></li>
                <li className={`${styles.Navlink} ${styles.navRoute}`}><Link to="Articles" smooth={true} duration={1600} onClick={closeNav}>Articles</Link></li>
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