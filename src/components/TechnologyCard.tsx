
import React, {
  type Dispatch,
  type SetStateAction,
} from "react";
import type { Itechnologies } from "../type/technologiesType";
import { toast } from "react-toastify";

interface ITechnologyCardProps {
  technology: Itechnologies;
  selectedTechnologies: Itechnologies[];
  setSelectedTechnologies: Dispatch<
    SetStateAction<Itechnologies[]>
  >;
}

const TechnologyCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: ITechnologyCardProps) => {

  // Check if this technology currently exists in the stack
  const isSelected = selectedTechnologies.some(
    (tech) => tech.id === technology.id
  );

  const handleSelectedTechnology = () => {
    if (isSelected) {
      // Remove from stack
      setSelectedTechnologies((prev) =>
        prev.filter((tech) => tech.id !== technology.id)
      );

      toast.success(`${technology.name} removed from stack!`);
    } else {
      // Add to stack
      setSelectedTechnologies((prev) => [
        ...prev,
        technology,
      ]);

      toast.success(`${technology.name} added to stack!`);
    }
  };

  return (
    <div
      className="
        group
        flex
        flex-col
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-lg
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">

        {/* Icon */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-slate-50
            p-2
            transition
            group-hover:bg-slate-100
          "
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
          />
        </div>

        {/* Badge */}
        <span
          className="
            rounded-full
            bg-slate-50
            px-3
            py-1
            text-xs
            font-medium
            text-slate-600
          "
        >
          {technology.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-1 flex-col">

        <h2 className="text-lg font-semibold text-slate-900">
          {technology.name}
        </h2>

        <p className="mt-2 min-h-[60px] text-sm leading-5 text-slate-500">
          {technology.description}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-slate-100" />

        {/* Technology information */}
        <div className="flex items-center justify-between gap-2 text-xs">

          {/* Category */}
          <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
            {technology.category}
          </span>

          {/* Difficulty */}
          <span className="text-slate-500">
            {technology.difficulty}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-1 font-medium text-slate-700">
            <span className="text-yellow-400">★</span>
            <span>{technology.rating}</span>
          </div>

        </div>

        {/* Button */}
        <button
          onClick={handleSelectedTechnology}
          className={`
            mt-5
            w-full
            rounded-lg
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            duration-200
            active:scale-[0.98]
            ${
              isSelected
                ? "bg-pink-500 hover:bg-pink-600"
                : "bg-slate-950 hover:bg-slate-800"
            }
          `}
        >
          {isSelected ? "Remove from Stack" : "Add to Stack"}
        </button>

      </div>
    </div>
  );
};

// import React, { useState, type Dispatch, type SetStateAction } from 'react';
// import type { Itechnologies } from '../type/technologiesType';
// import { toast } from 'react-toastify';

// interface ITechnologyCardProps  {
//     technology: Itechnologies;
//      selectedTechnologies: Itechnologies [];
//     setSelectedTechnologies:Dispatch<SetStateAction<Itechnologies[]>>
// }

// const TechnologyCard = ({ technology,selectedTechnologies,setSelectedTechnologies }:ITechnologyCardProps ) => {

//     const [isSelected, setIsSelected] = useState(false)
   
    
//     console.log(isSelected, setIsSelected, "isSelected,setIsSelected")


//     const handleSelectedTechnology = () => {
//         setIsSelected(true)
//         toast.success(`${technology.name} added to stack!`);
        
//         setSelectedTechnologies([...selectedTechnologies,technology])
//     }

//     return (
//         <div
//             key={technology.id}
//             className="
//                         group
//                         flex
//                         flex-col
//                         rounded-2xl
//                         border
//                         border-slate-200
//                         bg-white
//                         p-5
//                         shadow-sm
//                         transition-all
//                         duration-300
//                         hover:-translate-y-1
//                         hover:border-slate-300
//                         hover:shadow-lg
//                     "
//         >
//             {/* Header */}
//             <div className="flex items-start justify-between">
//                 {/* Icon */}
//                 <div
//                     className="
//                                 flex
//                                 h-12
//                                 w-12
//                                 items-center
//                                 justify-center
//                                 rounded-xl
//                                 bg-slate-50
//                                 p-2
//                                 transition
//                                 group-hover:bg-slate-100
//                             "
//                 >
//                     <img
//                         src={technology.icon}
//                         alt={technology.name}
//                         className="h-8 w-8 object-contain"
//                     />
//                 </div>

//                 {/* Badge */}
//                 <span
//                     className="
//                                 rounded-full
//                                 bg-slate-50
//                                 px-3
//                                 py-1
//                                 text-xs
//                                 font-medium
//                                 text-slate-600
//                             "
//                 >
//                     {technology.badge}
//                 </span>
//             </div>

//             {/* Content */}
//             <div className="mt-4 flex flex-1 flex-col">
//                 <h2 className="text-lg font-semibold text-slate-900">
//                     {technology.name}
//                 </h2>

//                 <p className="mt-2 min-h-[60px] text-sm leading-5 text-slate-500">
//                     {technology.description}
//                 </p>

//                 {/* Divider */}
//                 <div className="my-4 border-t border-slate-100" />

//                 {/* Technology information */}
//                 <div className="flex items-center justify-between gap-2 text-xs">
//                     {/* Category */}
//                     <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
//                         {technology.category}
//                     </span>

//                     {/* Difficulty */}
//                     <span className="text-slate-500">
//                         {technology.difficulty}
//                     </span>

//                     {/* Rating */}
//                     <div className="flex items-center gap-1 font-medium text-slate-700">
//                         <span className="text-yellow-400">★</span>
//                         <span>{technology.rating}</span>
//                     </div>
//                 </div>

//                 {/* Button */}
//                 <button
//                     onClick={() => handleSelectedTechnology()}
//                     className={`
//                                 mt-5
//                                 w-full
//                                 rounded-lg
//                                 bg-slate-950
//                                 px-4
//                                 py-2.5
//                                 text-sm
//                                 font-medium
//                                 text-white
//                                 transition
//                                 duration-200
//                                 <hover:bg-pink-300>
//                                 active:scale-[0.98]
//                                 hover:bg-black-800
//                                 disabled:cursor-not-allowed
//                                 disabled:opacity-50
                                
//                                 `}
//                     // disabled={isSelected === true ? true : false}
//                     disabled={isSelected}
//                 >
//                     {isSelected === true ? "Added to Stack" : "Add to Stack"}
//                 </button>
//             </div>
//         </div>
//     );
// };

export default TechnologyCard;