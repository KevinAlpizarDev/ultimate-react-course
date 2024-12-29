import React, { useState } from 'react';

export const AccordionItem = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div
      className={`border p-6 my-3 rounded-2xl w-full ${
        isOpen && "bg-[#eef2ff] border-[#5750e5]"
      }`}
    >
      <button
        onClick={handleToggle}
        className="inline-flex items-center justify-between text-gray-900 w-full transition duration-500 hover:text-indigo-600 my-2"
        aria-controls="basic-collapse-one-with-icon"
      >
        <span
          className={`mx-5 font-medium ${isOpen && "text-[#5750e5]"}`}
        >
          {num < 9 ? `0${num}` : num}
        </span>
        <div
          className={`${
            isOpen && "text-[#5750e5]"
          } flex justify-start text-start font-semibold w-full`}
        >
          <h5>{title}</h5>
        </div>
        <div className="mx-5">
          {!isOpen ? (
            <svg
              className="w-6 h-6 transition duration-500 block origin-center"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M12 18V6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-[#5750e5] transition duration-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          )}
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-screen scale-100"
            : "opacity-0 max-h-0 scale-95 hidden"
        }`}
      >
        <div
          id="basic-collapse-one-with-icon"
          className="accordion-content w-full pr-4 flex justify-center"
          aria-labelledby="basic-heading-one"
        >
          <p className="text-base text-gray-900 leading-6">{text}</p>
        </div>
      </div>
    </div>
  );
};
