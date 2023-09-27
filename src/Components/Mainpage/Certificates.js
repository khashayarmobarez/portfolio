import React from 'react';


import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

// Certificates
import fccRes from '../../media/Pics/www.freecodecamp.org_certification_khashayar-mobarez_responsive-web-design.png'
import fccAlgo from '../../media/Pics/www.freecodecamp.org_certification_khashayar-mobarez_js algorithms.png'

const Certificates = () => {

    const slides = {
        fccRes,
        fccAlgo
    }

    return (
        <div className='w-full h-[20rem] mt-10 flex justify-center items-center'>
            <div style={{backgroundImage:`url(${slides[1]})`}} className=' w-auto h-full bg-center bg-cover'></div>
        </div>
    );
};

export default Certificates;