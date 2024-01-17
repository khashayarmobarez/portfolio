import React from 'react';
import styles from './Work.module.css'

import docWebsite from '../../media/Pics/drbabakzandi-website.png'
import blogPage from '../../media/Pics/Web-capture-mobarez-blog.jpeg'
import ProjectsCards from '../Reusable components/ProjectsCards';

const Work = () => {


    return (
        <div className='w-full flex flex-col mt-[14vh] relative'>

            <div id='container' className='flex justify-center items-center w-full flex-col' >

                <div id='title' className='flex w-10/12 md:w-2/3'>
                    <h3 className=' md:text-2xl'><span className='text-gray-300 md:text-xl'>02.</span> Some things I’ve Built</h3>
                    <div id='line' className=' w-24 h-px bg-white mt-5 ml-2 md:w-2/3'></div>
                </div>

                <div id='GraphQl-project-website-Container' className=' flex flex-col items-center w-9/12 md:w-2/3 mt-[26rem] md:flex-row justify-between md:justify-center'>

                    {/* texts container Dr.zandi*/}
                    <div id='descriptions-container' className=' z-10 w-[16rem] h-[320px] flex flex-col items-center justify-around -mt-[20rem] md:mr-12 md:mt-[-21rem] md:w-1/3 md:items-start md:justify-center'>
                        <a href='https://khashayarmobarez.github.io/mobarez-blog-page/' target="_blank" rel="noopener noreferrer" className=' text-[24px] font-bold hover:underline underline-offset-4 md:pl-5'>Mobarez blog project</a>
                        <p id='' className='text-center text-lg md:bg-[#112240] md:p-2 md:h-auto md:w-[140%] md:text-start rounded-lg md:-mr-[10%]'>Mobarez Blog, meticulously crafted with
                        <span className=' font-semibold text-lg text-[#64FFDA]' > GraphQL</span> and <span className=' font-semibold text-lg text-[#64FFDA]' >material UI Technology, </span>seamlessly blends a captivating user experience with
                        <span className=' font-semibold text-lg text-[#64FFDA]' > efficient data fetching,</span> embodying a sophisticated fusion of    
                        <span className=' font-semibold text-lg text-[#64FFDA]' > modern web development technologies</span> for an immersive blogging platform</p>
                        <div className='flex w-full justify-between font-semibold md:self-end md:w-[90%] md:flex-col lg:flex-row'>
                            <p className=' text-[16px]' >react</p>
                            <p className=' text-[16px]' >Graphql</p>
                            <p className=' text-[16px]' >Material UI</p>
                        </div>
                    </div>

                    {/* image mobarez blog*/}
                    <img alt='weblog website' src={blogPage} className=' z-0 h-[345px] w-[300px] blur-[6px] brightness-[20%] mt-[-21rem] grayscale-[50%] rounded md:w-[500px] md:h-[300px] md:blur-0 md:brightness-90 md:grayscale-0 hover:border-solid hover:border-4 hover:border-slate-50' />

                </div>


                <div id='drZandi-website-Container' className=' flex flex-col items-center w-10/12 md:w-2/3 mt-32 md:flex-row justify-between md:justify-center'>

                    {/* image Dr.zandi*/}
                    <a href='https://drbabakzandi.com' target="_blank" rel="noopener noreferrer">
                        <img alt='doc website' src={docWebsite} className=' z-0 h-[345px] w-[300px] blur-[6px] brightness-[20%] grayscale-[50%] rounded md:w-[500px] md:h-[400px] md:blur-0 md:brightness-90 md:grayscale-0 hover:border-solid hover:border-4 hover:border-slate-50' />
                    </a>

                    {/* texts container Dr.zandi*/}
                    <div id='descriptions-container' className=' z-10 w-[16rem] h-[320px] flex flex-col items-center justify-around -mt-[21rem] md:mt-0 md:w-1/3 md:items-end md:justify-center'>
                        <a href='https://drbabakzandi.com' target="_blank" rel="noopener noreferrer" className=' text-2xl font-bold hover:underline underline-offset-4'>Dr.Zandi Website</a>
                        <p id='' className='text-center text-lg md:bg-[#112240] md:p-2 md:h-auto md:w-[140%] md:text-start rounded-lg md:-mr-[10%]'>Designed and developed a user-friendly website for a doctor, enabling patients to easily 
                        <span className=' font-semibold text-lg text-[#64FFDA]' > schedule appointments</span>. Incorporated a library of 
                        <span className=' font-semibold text-lg text-[#64FFDA]' > educational videos</span> and 
                        <span className=' font-semibold text-lg text-[#64FFDA]' > showcased</span> the doctor's professional expertise and services.</p>
                        <div className='flex w-full justify-between font-semibold md:self-end md:w-[90%] md:flex-col lg:flex-row'>
                            <p className=' text-sm' >react</p>
                            <p className=' text-sm' >styled components</p>
                            <p className=' text-sm' >REST API</p>
                        </div>
                    </div>
                </div>

                {/* other projects cards */}
                <h2 className=' w-[85%] text-center mt-28 text-2xl'>some other worthy looking projects</h2>
                <p className='text-base mt-3 mb-14 md:text-lg'>click to see the the projects</p>
                <div className='grid grid-rows-1 gap-[2rem] md:grid-cols-3 md:gap-[6vw]'>
                    <ProjectsCards projectName={"online store"} technology={'Redux'} webLink={'https://khashayarmobarez.github.io/webstore-react-redux/'} description={'A React web store project utilizing Redux for state management, offering a seamless and centralized approach to handling complex application states, ensuring efficient data flow and predictable interactions'} />
                    <ProjectsCards projectName={"crypto Price website"} technology={'REST API'} webLink={'https://khashayarmobarez.github.io/crypto-currency-price/'} description={"A React app displaying real-time cryptocurrency prices through REST API integration, providing users with up-to-date and comprehensive market information."} />
                    <ProjectsCards projectName={'chatApp'} technology={'React, fireBase'} webLink={'https://github.com/khashayarmobarez/chat-app'} description={"The app is Down temporarily because of the payment problems and it will be fixed soon, but the code is available on my github. click to see the code. google Firebase and REST API technology is used on this project."} />
                </div>
                <a className='mt-8 text-base md:text-lg underline decoration-dotted hover:text-xl transition-all' href='https://github.com/khashayarmobarez'>check my github account for more projects</a>

                
                <div className='flex w-2/3 mt-20 flex-col h-[14rem] justify-between items-center lg:flex-row lg:justify-around lg:w-1/2'>
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