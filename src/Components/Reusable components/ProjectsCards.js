import React from 'react';
import styles from './ProjectCards.module.css';

const ProjectsCards = (props) => {

    const {projectName, technology, description, webLink} = props; 

    return (
        <div className=' mt-5 md:mt-0'>
            <div className={styles.card}>
                <a  href={webLink} target="_blank" rel="noopener noreferrer" >
                    <div className={styles.card2}>
                        <h1 className=' text-xl font-extrabold'>{projectName}</h1>
                        <h3 className=' text-base'>{technology}</h3>
                        <p className=' text-sm text-center'>{description}</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ProjectsCards;
