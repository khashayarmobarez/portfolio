import React from 'react';
import styles from './Work.module.css'

import docWebsite from '../../media/Pics/drbabakzandi-website.png'

const Work = () => {
    return (
        <div className='w-full flex flex-col mt-[14vh] relative'>

            <div id='container' className='flex justify-center items-center w-full flex-col' >

                <div id='title' className='flex w-10/12 md:w-2/3'>
                    <h3 className=' md:text-2xl'><span className='text-gray-300 md:text-xl'>02.</span> Some things I’ve Built</h3>
                    <div id='line' className=' w-24 h-px bg-white mt-5 ml-2 md:w-2/3'></div>
                </div>

                <div id='drZandi-website-Container' className=' flex flex-col items-center w-10/12 md:w-2/3 mt-20 md:flex-row justify-between md:justify-center'>

                    {/* image */}
                    <img alt='doc website' src={docWebsite} className=' z-0 h-[345px] w-[300px] blur-[6px] brightness-[20%] grayscale-[50%] rounded md:w-[500px] md:h-[400px] md:blur-0 md:brightness-90 md:grayscale-0' />

                    {/* texts container  */}
                    <div id='descriptions-container' className=' z-10 w-[16rem] h-[320px] flex flex-col items-center justify-around -mt-[21rem] md:mt-0 md:w-1/3 md:items-end md:justify-center'>
                        <h1 className=' text-2xl font-bold'>Dr.Zandi Website</h1>
                        <p id='' className='text-center text-lg md:bg-[#112240] md:p-2 md:h-auto md:w-[140%] md:text-start rounded-lg md:-mr-[10%]'>Designed a user-friendly website for a doctor, enabling patients to easily 
                        <span className=' font-semibold text-lg text-[#64FFDA]' > schedule appointments</span>. Incorporated a library of 
                        <span className=' font-semibold text-lg text-[#64FFDA]' > educational videos</span> and 
                        <span className=' font-semibold text-lg text-[#64FFDA]' > showcased</span> the doctor's professional expertise and services.</p>
                        <div className='flex w-full justify-between font-semibold md:self-end md:w-[90%] md:flex-col lg:flex-row'>
                            <p className=' text-sm' >react</p>
                            <p className=' text-sm' >styled components</p>
                            <p className=' text-sm' >TailWind css</p>
                        </div>
                    </div>
                </div>

                
                <div className='flex w-2/3 mt-32 flex-col h-[14rem] justify-between items-center lg:flex-row lg:justify-around lg:w-1/2'>
                    <h2 className='text-center text-2xl font-semibold lg:w-[60%]'>Rest of the projects will be added soon...</h2>

                    {/* loader  */}
                    <div className={styles.loader}>
                        <div className={`${styles.box} ${styles.box1}`}>
                            <div className={styles.sideLeft}></div>
                            <div className={styles.sideRight}></div>
                            <div className={styles.sideTop}></div>
                        </div>
                        <div className={`${styles.box} ${styles.box2}`}>
                            <div className={styles.sideLeft}></div>
                            <div className={styles.sideRight}></div>
                            <div className={styles.sideTop}></div>
                        </div>
                        <div className={`${styles.box} ${styles.box3}`}>
                            <div className={styles.sideLeft}></div>
                            <div className={styles.sideRight}></div>
                            <div className={styles.sideTop}></div>
                        </div>
                        <div className={`${styles.box} ${styles.box4}`}>
                            <div className={styles.sideLeft}></div>
                            <div className={styles.sideRight}></div>
                            <div className={styles.sideTop}></div>
                        </div>
                    </div>
                </div>

            
            </div>

        </div>
    );
};

export default Work;