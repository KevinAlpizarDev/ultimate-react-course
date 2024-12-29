import React from 'react';
import { AccordionItem } from '../components/AccordionItem';

export const Accordion = ({ data }) => {
  return (
    <div className="flex flex-col items-center p-6  w-full">
      {data.map((data, index) => (
        <AccordionItem 
          key={index} 
          num={index} 
          title={data.title} 
          text={data.text} 
        />
      ))}





















    </div>
  );
};
