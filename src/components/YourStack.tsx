
import React, { type Dispatch, type SetStateAction } from 'react';
import type { Itechnologies } from '../type/technologiesType';
import YourStackCard from './YourStackCard';
import { toast } from 'react-toastify';

interface IYourStackProps {
  selectedTechnologies: Itechnologies[];
  setSelectedTechnologies: Dispatch<SetStateAction<Itechnologies[]>>;
}

const YourStack = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: IYourStackProps) => {

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack!");
  };

  if (selectedTechnologies.length === 0) {
    return (
      <div className="grid grid-cols-1 gap-3 w-120 ml-6 mb-260 mt-8 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="text-base font-semibold text-gray-800">
          Your Stack
        </h2>

        <h6 className="text-sm text-gray-400">
          No technologies selected yet.
        </h6>

        <div className="mt-4  flex h-[100px] w-[200px] items-center justify-center rounded-xl border border-dashed border-gray-200">
          <p className="text-sm text-gray-400">
            Your stack is empty.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 w-120 ml-6 mb-260 mt-7 rounded-2xl bg-white p-5 shadow-sm">

      <h2 className="text-base font-semibold text-gray-800">
        Your Stack
      </h2>

      <p className="mt-1 text-sm text-gray-400">
        {selectedTechnologies.length} technologies selected yet.
      </p>

      <div className="h-[400px] overflow-y-auto">
        {selectedTechnologies.map((technology) => (
          <YourStackCard
            key={technology.id}
            technology={technology}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        ))}
      </div>
      <button
        onClick={handleRemoveAll}
        className="w-full rounded-full border border-red-300 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
      >
        Remove All
      </button>

    </div>
  );
};

export default YourStack;