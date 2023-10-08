import React from 'react';



// Certificates
import fccRes from '../../media/Pics/freecodecamp.org_certification_khashayar-mobarez_responsive-web-design.png'
import fccAlgo from '../../media/Pics/www.freecodecamp.org_certification_khashayar-mobarez_js_algorithms.png';
import Caarousel from '../Functions/Caarousel';

const Certificates = () => {

    const slides = [
        {
            pic: fccRes,
            name: 'Responsive web design certification'
        },
        {
            pic: fccAlgo,
            name: 'JS algorithms and data structure Certification '
        }
    ];

    return (
        <div className='w-full h-[280px] mx-0 my-auto flex justify-center mt-36 '>
            <Caarousel slides={slides} />
        </div>
    );
};

export default Certificates;