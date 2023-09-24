import React from 'react';
import styles from './About.module.css'

import triangle from '../../media/SVG/triangle.svg'


const About = () => {
    return (
        <div className='w-full flex flex-col justify-center mt-24 relative'>

            <div id='container' className='flex justify-center items-center w-full flex-col' >

                <div id='title' className='flex w-10/12'>
                    <h3 className=' text-2xl'><span className='text-gray-300 text-xl'>01.</span> about me</h3>
                    <div id='line' className=' w-40 h-px bg-white mt-6 ml-2'></div>
                </div>

                <div id='description' className='w-10/12'>
                    <p className=' w-full mt-8 font-light text-base' > I am a web developer with 4 years of experience in creating dynamic and responsive websites. I started my journey at [FreeCodeCamp], an online platform that offers self-paced courses on web development. There I learned the basics of HTML, CSS, JavaScript, and other web technologies.
                        <br/><br/>
                        After completing the courses, I enrolled in [Botostart Bootcamp], a 18-week intensive program that teaches advanced skills in React and Redux. There I built several projects using these frameworks, such as a social media app, a blog platform, and a e-commerce website. I also learned how to use tools like Git, Firebase, and Bootstrap.
                        <br/><br/>
                        I am passionate about web development and always eager to learn new things. I enjoy solving problems and creating user-friendly interfaces. I am proficient in React and Redux, but I also have experience with other libraries and frameworks such as Next.js.
                        <br/><br/>
                        I am looking for opportunities to work on challenging and exciting web projects that can make a positive impact on the world. If you are interested in working with me, please feel free to contact me. Thank you for reading my about me section.
                        <br/><br/>
                        Here are a few technologies I’ve been working with recently:
                    </p>

                    <div id='technologies' className={`w-full h-24 mt-7 flex flex-wrap ${styles.Container}`}>

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
                            <p className=' text-sm ml-1'>Next Js</p>
                        </div>
                        
                    </div>

                </div>

                <div className=''></div>
                
            </div>
        </div>
    );
};

export default About;