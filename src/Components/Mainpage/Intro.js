import React from 'react';
import styles from './Intro.module.css'


const Intro = () => {

    const scrollWin = () => {
        window.scrollTo({
          top: 650,
          behavior: 'smooth'
        });
      };

    return (
        <div className='w-full flex justify-center'>

            <div className={`flex justify-center items-center md:items-start flex-col w-11/12 md:w-2/3 mt-[27vh] md:mt-40 p-4 ${styles.Container}`}>

                <h1 className=' text-5xl md:text-7xl text-center md:text-start font-bold text-[#CCD6F6] ' >Khashayar Mobarez.</h1>
                <h2 className=' text-3xl md:text-5xl mt-2 text-center md:text-start font-semibold' >I create web-based applications and products.</h2>
                <h3 className=' md:text-2xl text-lg text-center mt-4 md:text-start' > i like to craft solid and scalable Web products with great user experiences.</h3>
                <button className={` mt-10 ${styles.button_top}`}>applying for a project</button>
                <div className={`mt-[16vh] md:mt-[20vh] md:ml-[47%] ${styles.scrolldown}`} onClick={scrollWin} >
                    <div className={styles.chevrons}>
                        <div className={styles.chevrondown}></div>
                        <div className={styles.chevrondown}></div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Intro;