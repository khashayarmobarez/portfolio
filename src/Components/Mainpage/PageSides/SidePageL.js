import React from 'react';
import styles from './SidePageL.module.css';

// SVGs
import X from '../../../media/SVG/SocialLogos/X.svg'
import insta from '../../../media/SVG/SocialLogos/Instagram.svg'
import Discord from '../../../media/SVG/SocialLogos/Discord.svg'
import linkedin from '../../../media/SVG/SocialLogos/LinkedIn.svg'

const SidePageL = () => {
    
    return (
        <div className={`fixed flex flex-col bottom-0 ml-8 ${styles.Container}`}>

            <div className={`flex flex-col justify-between items-center ${styles.socialContainer}`}>
                <a href='https://www.linkedin.com/in/khashayarmobarez/' target="_blank" rel="noopener noreferrer" ><img className={styles.SocialLogo} alt='social logo' src={linkedin} /></a>
                <a href='https://www.instagram.com/khashayarmobarez/' target="_blank" rel="noopener noreferrer" > <img className={styles.SocialLogo} alt='social logo' src={insta} /> </a>
                <a href='https://discord.gg/mcHvR4z79f' target="_blank" rel="noopener noreferrer" > <img className={styles.SocialLogo} alt='social logo' src={Discord}/> </a>
                <a href='https://twitter.com/khmbrz' target="_blank" rel="noopener noreferrer" > <img className={`${styles.X} ${styles.SocialLogo}`} alt='social logo' src={X}/> </a>
            </div>

            <div className={`${styles.line}`}></div>
        </div>
    );
};

export default SidePageL;