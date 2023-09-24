import React from 'react';
import styles from './Intro.module.css'


const Intro = () => {
    return (
        <div className='w-full flex justify-center'>

            <div className={`flex justify-center items-center md:items-start flex-col w-full md:w-2/3 mt-28 md:mt-40 p-4 ${styles.Container}`}>

                <h1 className=' text-6xl text-center font-semibold' >khashayar mobarez</h1>
                <h2 className=' text-4xl mt-10 text-center' >A front-end developer</h2>
                <h3 className=' text-2xl text-center mt-4 md:text-start' > i like to craft solid and scalable frontend products with great user experiences.</h3>
                <button className={` mt-10 ${styles.button_top}`}>applying for a project</button>

            </div>

        </div>
    );
};

export default Intro;