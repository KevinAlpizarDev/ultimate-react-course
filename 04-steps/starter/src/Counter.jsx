import React from "react";
import { useState } from "react";

export const Counter = () => {

const [step, setStep] = useState(0)

const [count, setCount] = useState(0)


const decrementSteps = () => {
   step > 0 &&  setStep(s => s - 5);
  };
  const incrementSteps = () => {
  setStep(s => s + 5)
  };
  
 
 
const decrementCounter = () => {
 count > 0 && setCount(c => c - 30)
  };
  const incrementCounter= () => {
setCount(c => c + 30 )
  };
  


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Counter</h1>

      {/* Step Controls */}
      <div className="flex items-center space-x-4 mb-6">
        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600 transition" onClick={decrementSteps}>
          -5
        </button>
        <p className="text-xl font-medium text-gray-700">Steps: {step}</p>
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 transition" onClick={incrementSteps}>
          +5
        </button>
      </div>

      {/* Counter Controls */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition" onClick={decrementCounter}>
          -30
        </button>
        <p className="text-2xl font-bold text-gray-800">Counter: {count}</p>
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition"  onClick={incrementCounter}>
          +30
        </button>
      </div>
    </div>
  );
};
