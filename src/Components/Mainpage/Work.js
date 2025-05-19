import React, { useEffect, useState } from 'react';
import styles from './Work.module.css'
import stylesFloat from '../FloatStyles/FloatLeft.module.css'

import digilogbook from '../../media/Pics/digilogbook.png'
import mobarrez from '../../media/Pics/mobarrez.png'
import ProjectsCards from '../Reusable components/ProjectsCards';

const Work = () => {

    // to handle floating in 
    const [isFloating, setIsFloating] = useState(false)

    // to handle floating in 
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        let shouldFloat = false;
    
        if (window.innerWidth >= 768) {
          // For devices with width more than 768px
          shouldFloat = scrollTop > 1150;
        } else {
          // For devices with width less than 768 pixels
          shouldFloat = scrollTop > 1950;
        }
    
        setIsFloating(shouldFloat);
      };

    // to handle floating in 
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className={`w-full flex flex-col mt-[14vh] relative ${stylesFloat.floatingComponent} ${isFloating ? stylesFloat.floating : ''}`}>

            <div id='container' className='flex justify-center items-center w-full flex-col' >

                <div id='title' className='flex w-10/12 md:w-2/3'>
                    <h3 className=' md:text-2xl'><span className='text-gray-300 md:text-xl'>02.</span> Some things I’ve Built</h3>
                    <div id='line' className=' w-24 h-px bg-white mt-5 ml-2 md:w-2/3'></div>
                </div>

                <div id='GraphQl-project-website-Container' className=' flex flex-col items-center w-9/12 md:w-2/3 mt-[26rem] md:flex-row justify-between md:justify-center'>

                    {/* texts container Dr.zandi*/}
                    <div id='descriptions-container' className=' z-10 w-[16rem] h-[320px] flex flex-col items-center justify-around -mt-[20rem] md:mr-12 md:mt-[-21rem] md:w-1/3 md:items-start md:justify-center'>
                        <a href='https://mobarrez.com' target="_blank" rel="noopener noreferrer" className=' text-[24px] font-bold hover:underline underline-offset-4 md:pl-5'>Founder of Mobarrez Co</a>
                        <p id='' className='text-center text-lg md:bg-[#112240] md:p-2 md:h-auto md:w-[140%] md:text-start rounded-lg md:-mr-[10%]'>Mobarrez Company website crafted with
                        <span className=' font-semibold text-lg text-[#64FFDA]' >NextJs</span> and <span className=' font-semibold text-lg text-[#64FFDA]' >daisy ui, </span>seamlessly blends a captivating user experience with
                        <span className=' font-semibold text-lg text-[#64FFDA]' > efficient data fetching,</span> embodying a sophisticated fusion of    
                        <span className=' font-semibold text-lg text-[#64FFDA]' > modern web development technologies</span> for an immersive blogging platform</p>
                        <div className='flex w-full justify-between font-semibold md:self-end md:w-[90%] md:flex-col lg:flex-row'>
                            <p className=' text-[16px]' >NextJs</p>
                            <p className=' text-[16px]' >Graphql</p>
                            <p className=' text-[16px]' >Material UI</p>
                        </div>
                    </div>

                    {/* image mobarez blog*/}
                    <img alt='weblog website' src={mobarrez} className=' z-0 h-[345px] w-[300px] blur-[6px] brightness-[20%] mt-[-21rem] grayscale-[50%] rounded md:w-[500px] md:h-[300px] md:blur-0 md:brightness-90 md:grayscale-0 hover:border-solid hover:border-4 hover:border-slate-50' />

                </div>


                <div id='drZandi-website-Container' className=' flex flex-col items-center w-10/12 md:w-2/3 mt-32 md:flex-row justify-between md:justify-center'>

                    {/* image Dr.zandi*/}
                    <a href='https://khashayarmobarez.github.io/dentalOfficeProject/' target="_blank" rel="noopener noreferrer">
                        <img alt='doc website' src={digilogbook} className=' z-0 h-[345px] w-[300px] blur-[6px] brightness-[20%] grayscale-[50%] rounded md:w-[500px] md:h-[400px] md:blur-0 md:brightness-90 md:grayscale-0 hover:border-solid hover:border-4 hover:border-slate-50' />
                    </a>

                    {/* texts container Dr.zandi*/}
                    <div id='descriptions-container' className=' z-10 w-[16rem] h-[320px] flex flex-col items-center justify-around -mt-[21rem] md:mt-0 md:w-1/3 md:items-end md:justify-center'>
                        <a href='https://digilogbook-landing.vercel.app/' target="_blank" rel="noopener noreferrer" className=' text-2xl font-bold hover:underline underline-offset-4 ml-2 text-center'>Digilogbook lead Front-end engineer</a>
                        <p id='' className='text-center text-lg md:bg-[#112240] md:p-2 md:h-auto md:w-[140%] md:text-start rounded-lg md:-mr-[10%]'>developed a user-friendly website for parbaz company as the lead front-end engineer for 1 and a half years, enabling pilots to easily 
                        <span className=' font-semibold text-lg text-[#64FFDA]' > log their flight data</span>. Incorporated a full application
                        <span className=' font-semibold text-lg text-[#64FFDA]' > flight record system</span> and 
                        <span className=' font-semibold text-lg text-[#64FFDA]' > showcased</span> the pilots flight records.</p>
                        <div className='flex w-full justify-between font-semibold md:self-end md:w-[90%] md:flex-col lg:flex-row'>
                            <p className=' text-sm' >react</p>
                            <p className=' text-sm' >Nextjs</p>
                            <p className=' text-sm' >REST APIs</p>
                        </div>
                    </div>
                </div>

                {/* other projects cards */}
                <h2 className=' w-[85%] text-center mt-28 text-2xl'>some other worthy looking projects</h2>
                <p className='text-base mt-3 mb-14 md:text-lg'>click to see the the projects</p>
                <div className='grid grid-rows-1 gap-[2rem] md:grid-cols-3 md:gap-[6vw]'>
                    <ProjectsCards projectName={"online store"} technology={'Redux'} webLink={'https://khashayarmobarez.github.io/webstore-react-redux/'} description={'A React web store project utilizing Redux for state management, offering a seamless and centralized approach to handling complex application states, ensuring efficient data flow and predictable interactions'} />
                    <ProjectsCards projectName={"crypto Price website"} technology={'REST API'} webLink={'https://khashayarmobarez.github.io/crypto-currency-price/'} description={"A React app displaying real-time cryptocurrency prices through REST API integration, providing users with up-to-date and comprehensive market information."} />
                    <ProjectsCards projectName={'Mobarez blog project'} technology={'React, fireBase'} webLink={'https://khashayarmobarez.github.io/mobarez-blog-page/'} description={"Mobarez Blog, meticulously crafted with GraphQL and material UI Technology, seamlessly blends a captivating user experience with efficient data fetching."} />
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