import React, { use } from 'react';
import type { Itechnologies } from '../../type/technologiesType';
import AvailableTechnology from '../TechnologyGrid';
import YourStack from '../YourStack';



interface technologiesProps {
    technologiesPromise: Promise<Itechnologies[]>
}

const Technologies = ({ technologiesPromise }: technologiesProps) => {
    console.log(technologiesPromise)
    const technologies = use(technologiesPromise)
    console.log(technologies)
    return (
        <div className='mx-auto  max-w-6xl items-center px-6'>
            <h2 className='font-bold text-4xl '>Explore the <span className='text-[#DE4BA6]'>Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            <div className='flex '>
                 <AvailableTechnology technologies={technologies}></AvailableTechnology>
                 <YourStack></YourStack>
            </div>
        </div>
    );
};

export default Technologies;