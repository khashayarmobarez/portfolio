import React from 'react';
import styles from './SIdePageR.module.css'

const SidePageR = () => {
    return (
        <div className={`fixed flex flex-col items-center justify-between bottom-0 mr-7 right-0 ${styles.Container}`}>

            <a className={`rotate-0 text-sm md:rotate-90 ${styles.email}`} href='mailto:khashayarmobarezbusiness@gmail.com'>khashayarmobarezbusiness@gmail.com</a>

            <div className={`${styles.line}`}></div>
        </div>
    );
};

export default SidePageR;