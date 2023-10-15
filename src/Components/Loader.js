import React from 'react';
import styles from './Loader.module.css'
import 'animate.css'

const Loader = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center flex-col animate__animated animate__delay-0s animate__flipInY'>
            <div className={styles.loaderLogo}>
                <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" width="60" height="70" viewBox="0 0 55 63">
                     <path d="M21.0977 11.4266C21.0977 3.6332 16.4427 0 10.5846 0C3.7526 0 0 5.01992 0 11.2879V50.532C0 57.0912 3.6237 62.0973 10.7279 62.0973C16.4284 62.0973 21.0977 58.5473 21.0977 50.532V39.9236L37.1536 59.102C40.4049 62.8738 47.4805 63.3592 51.9349 59.102C55.8021 55.2746 55.8451 49.7555 52.9948 46.3164L39.9896 30.3969L50.7174 15.5035C53.2096 12.0783 53.224 6.75332 49.2279 3.05078C44.888 -0.970703 37.4258 -1.33125 32.957 4.82578L21.0977 21.2168V11.4266Z" fill="none" stroke="white" strokeWidth='2px'/>
                </svg>

            </div>
            
            <div className={styles.wrapper}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
            </div>
        </div>
    );
};

export default Loader;