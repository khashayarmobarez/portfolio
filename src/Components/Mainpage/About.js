import React, { useEffect, useState } from 'react';
import stylesFloat from '../FloatStyles/FloatRight.module.css';

import triangle from '../../media/SVG/triangle.svg'
import myPic from '../../media/Pics/portfolio-photo.jpg'


const About = () => {

    // to handle floating in 
    const [isFloating, setIsFloating] = useState(false)

    // to handle floating in 
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        let shouldFloat = false;
    
        if (window.innerWidth >= 768) {
          // For devices with width more than 768px
          shouldFloat = scrollTop > 300;
        } else {
          // For devices with width less than 768 pixels
          shouldFloat = scrollTop > 350;
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
                    <h3 className=' text-2xl'><span className='text-gray-300 text-xl'>01.</span> about me</h3>
                    <div id='line' className=' w-40 h-px bg-white mt-4 ml-2 md:w-1/2'></div>
                </div>

                <div id='description and picture' className='flex flex-col md:flex-row  w-10/12 md:w-2/3 justify-between'>

                    <div id='description' className='w-full md:w-1/2'>
                        <p className=' w-full mt-8 font-light text-lg' > I am a web developer with 4 years of experience in creating dynamic and responsive websites. I started my journey at [FreeCodeCamp], an online platform that offers self-paced courses on web development. There I learned the basics of HTML, CSS, JavaScript, and other web technologies.
                            <br/><br/>
                            After completing the courses, I enrolled in [Botostart Bootcamp], a 18-week intensive program that teaches advanced skills in React and Redux. There I built several projects using these frameworks, such as a social media app, a blog platform, and a e-commerce website. I also learned how to use tools like Git, Firebase, and Bootstrap.
                            <br/><br/>
                            I am passionate about web development and always eager to learn new things. I enjoy solving problems and creating user-friendly interfaces. I am proficient in React and Redux, but I also have experience with other libraries and frameworks such as Next.js.
                            <br/><br/>
                            I am looking for opportunities to work on challenging and exciting web projects that can make a positive impact on the world. If you are interested in working with me, please feel free to contact me. Thank you for reading my about me section.
                            <br/><br/>
                            Here are a few technologies I’ve been working with recently:
                        </p>

                        <div id='technologies' className='w-full h-24 mt-7 flex flex-wrap md:w-[17rem]'>

                            <div className='flex justify-start items-center w-32 mb-4 ml-2'>
                                <img src={triangle} alt='traingle'/>
                                <p className=' text-sm ml-1'>JavaScript (ES6+)</p>
                            </div>
                            <div className='flex justify-start items-center w-32 mb-4 ml-2'>
                                <img src={triangle} alt='traingle'/>
                                <p className=' text-sm ml-1'>React Js</p>
                            </div>
                            <div className='flex justify-start items-center w-32 mb-4 ml-2'>
                                <img src={triangle} alt='traingle'/>
                                <p className=' text-sm ml-1'>Redux Js</p>
                            </div>
                            <div className='flex justify-start items-center w-32 mb-4 ml-2'>
                                <img src={triangle} alt='traingle'/>
                                <p className=' text-sm ml-1'>TailwindCss</p>
                            </div>
                            <div className='flex justify-start items-center w-32 mb-4 ml-2'>
                                <img src={triangle} alt='traingle'/>
                                <p className=' text-sm ml-1'>graphQL</p>
                            </div>
                            <div className='flex justify-start items-center w-32 mb-4 ml-2'>
                                <img src={triangle} alt='traingle'/>
                                <p className=' text-sm ml-1'>Material UI</p>
                            </div>
                            <div className='flex justify-start items-center w-32 mb-4 ml-2'>
                                <img src={triangle} alt='traingle'/>
                                <p className=' text-sm ml-1'>React Query</p>
                            </div>
                            <div className='flex justify-start items-center w-32 mb-4 ml-2'>
                                <img src={triangle} alt='traingle'/>
                                <p className=' text-sm ml-1'>Learning Next Js...</p>
                            </div>
                            
                        </div>

                    </div>

                    <div id='picture' className=' w-64 h-[280px] mt-20 mb-6 md:w-80 md:mt-[-4rem] self-center'>
                        <img src={myPic} alt='my-pic' className=' w-11/12 h-[260px] md:h-[300px] md:w-[280px] rounded-lg transition-all hover:mt-[-5px] hover:mb-2 hover:ml-[-5px]' />
                        <div id='picBorder' className='w-10/12 h-[260px] md:h-[300px] -mt-[14.7rem] mr-[3px] md:-mt-[17.5rem] md:mr-6 border-solid border-2 border-y-white float-right rounded-lg' ></div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default About;