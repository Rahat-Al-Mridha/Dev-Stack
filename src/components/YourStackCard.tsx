import React, { type Dispatch, type SetStateAction } from 'react';
import type { Itechnologies } from '../type/technologiesType';
import { RxCross1 } from 'react-icons/rx';
import { toast } from 'react-toastify';

interface ISelectedPlayerCardProps {
    technology: Itechnologies;
     selectedTechnologies: Itechnologies[];
      setSelectedTechnologies: Dispatch<SetStateAction<Itechnologies[]>>
}

const YourStackCard = ({ technology,selectedTechnologies, setSelectedTechnologies }: ISelectedPlayerCardProps) => {
    const handleRemoveTechnology = (technology: Itechnologies) => {

        const restTechnologies = selectedTechnologies.filter(selectedTechnology => selectedTechnology.name != technology.name)
        toast.success(`${technology.name} removed from stack!`);
        setSelectedTechnologies(restTechnologies)
    }
    return (
        <div className='flex h-[100px] w-[200px] gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl px-3 py-3'>
            <div className='flex gap-2 '>
                <img src={technology.icon} alt="" className='h-[40px] w-[40px]' />
                <div>
                    <h3 className='font-bold text-1xl'>{technology.name}</h3>
                    <p>{technology.category}</p>
                </div>
            </div>
            <span className='text-slate-400 font-bold cursor-pointer' onClick={() => handleRemoveTechnology(technology)}>
                <RxCross1 />
            </span>

        </div>
    );
};

export default YourStackCard;