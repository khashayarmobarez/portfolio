import React, { useState, useEffect } from 'react';
import styles from './Caarousel.module.css'

import 'animate.css'

const Caarousel = ({slides}) => {

    const [currentIndex, setIndex] = useState(0)
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            NextSlide();
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(timer); // Clear interval on component unmount
    }, [currentIndex]);

    
    const NextSlide = () => {
        setTransitioning(true);
        setTimeout(() => {
            setIndex(prevIndex => {
                const isLastSlide = prevIndex === slides.length - 1;
                return isLastSlide ? 0 : prevIndex + 1;
            });
            setTransitioning(false);
        }, 1000);
    }
    
    const LastSlide = () => {
        setTransitioning(true);
        setTimeout(() => {
            setIndex(prevIndex => {
                const isFirstSlide = prevIndex === 0;
                return isFirstSlide ? slides.length - 1 : prevIndex - 1;
            });
            setTransitioning(false);
        }, 1000);
    }

    return (
        <div className='h-full md:w-2/3 w-4/5 relative flex justify-around items-center'>

            <div className={styles.arrow} style={{ transform: 'rotate(90deg)' }} onClick={LastSlide} >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className='w-3/5 md:w-1/2 h-auto flex flex-col justify-center items-center'>
                <img className={`w-full rounded mb-4 transition-opacity duration-1000 ${transitioning ? 'opacity-0' : 'opacity-100'}`}  src={slides[currentIndex].pic} alt='certificate'></img>
                <h1 className='text-center text-base'>{slides[currentIndex].name}</h1>
            </div>
            
            <div className={styles.arrow} style={{ transform: 'rotate(-90deg)' }} onClick={NextSlide} >
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    );
};

export default Caarousel;