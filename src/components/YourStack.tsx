import React from 'react';

const YourStack = () => {
  return (
    <div className="w-120 ml-6 mb-260 mt-8 rounded-2xl bg-white p-5 shadow-sm">
      {/* Heading */}
      <h2 className="text-base font-semibold text-gray-800">
        Your Stack
      </h2>

      {/* Subtitle */}
      <p className="mt-1 text-sm text-gray-400">
        No technologies selected yet.
      </p>

      {/* Empty Stack Box */}
      <div className="mt-4 flex h-16 items-center justify-center rounded-xl border border-dashed border-blue-100">
        <p className="text-sm text-blue-200">
          Your stack is empty.
        </p>
      </div>
    </div>
  );
};
export default YourStack;