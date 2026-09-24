import React, { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { Itechnologies } from '../../type/technologiesType';

import YourStack from '../YourStack';
import AvailableTechnology from '../TechnologyGrid';



interface technologiesProps {
    selectedTechnologies: Itechnologies[];
    setSelectedTechnologies: Dispatch<SetStateAction<Itechnologies[]>>;
    technologies:Itechnologies[];
}


const Technologies = ({ technologies,selectedTechnologies, setSelectedTechnologies }: technologiesProps) => {
   
   
    console.log(technologies)
    return (
        <div className='mx-auto  max-w-6xl items-center px-6'>
            <h2 className='font-bold text-4xl '>Explore the <span className='text-[#DE4BA6]'>Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            <div className='flex '>
                 <AvailableTechnology technologies={technologies} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}></AvailableTechnology>
                
            </div>
        </div>
    );
};

export default Technologies;