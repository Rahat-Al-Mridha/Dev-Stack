import React, { type Dispatch, type SetStateAction } from "react";
import type { Itechnologies } from "../type/technologiesType";
import TechnologyCard from "./TechnologyCard";

interface IAvailableProps {
    technologies:Itechnologies[];
    selectedTechnologies: Itechnologies[];
    setSelectedTechnologies:Dispatch<SetStateAction<Itechnologies[]>>
}

const AvailableTechnology = ({ technologies,selectedTechnologies, setSelectedTechnologies }:IAvailableProps) => {
    return (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology: Itechnologies, ind: number) => {
                return <TechnologyCard key={ind} technology={technology} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}></TechnologyCard>
            })}
        </div>
    );
};

export default AvailableTechnology;