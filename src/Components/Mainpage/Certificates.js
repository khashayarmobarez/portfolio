import React, { useEffect, useState } from 'react';
import stylesFloat from '../FloatStyles/FloatRight.module.css'


// Certificates
import fccRes from '../../media/Pics/freecodecamp.org_certification_khashayar-mobarez_responsive-web-design.png'
import fccAlgo from '../../media/Pics/www.freecodecamp.org_certification_khashayar-mobarez_js_algorithms.png';
import Caarousel from '../Functions/Caarousel';

const Certificates = () => {

    // to handle floating in 
    const [isFloating, setIsFloating] = useState(false)

    // to handle floating in 
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        let shouldFloat = false;
    
        if (window.innerWidth >= 768) {
          // For devices with width more than 768px
          shouldFloat = scrollTop > 3000;
        } else {
          // For devices with width less than 768 pixels
          shouldFloat = scrollTop > 4300;
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


    const slides = [
        {
            pic: fccRes,
            name: 'Responsive web design certification',
            url: 'https://www.freecodecamp.org/certification/khashayar-mobarez/responsive-web-design'
        },
        {
            pic: fccAlgo,
            name: 'JS algorithms and data structure Certification ',
            url: 'https://www.freecodecamp.org/certification/khashayar-mobarez/javascript-algorithms-and-data-structures'
        }
    ];

    return (
        <div className={`w-full h-auto my-auto flex flex-col justify-center items-center mt-36 relative ${stylesFloat.floatingComponent} ${isFloating ? stylesFloat.floating : ''}`}>

            <div id='title' className='flex w-10/12 md:w-2/3 mb-24'>
                <h3 className=' text-2xl'><span className='text-gray-300 text-xl'>03.</span> Certificates</h3>
                <div id='line' className=' w-40 h-px bg-white mt-4 ml-2 md:w-1/2'></div>
            </div>

            <p className='mb-5 w-[20%] text-center md:text-sm text-xs'>click on the text under the certificate to verify the certificate</p>
    
            <Caarousel slides={slides} />

        </div>
    );
};

export default Certificates;