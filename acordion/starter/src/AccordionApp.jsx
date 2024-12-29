import React from 'react';
import { Accordion } from './components/Accordion';
import { faqs } from './service/data';

export const AccordionApp = () => {
  return (
<>
      <h1 className="text-2xl font-bold text-center text-slate-800 mb-5">Preguntas Frecuentes</h1>

<div className="flex mx-72 justify-center rounded-2xl border  ">
      <Accordion data={faqs} />
   
    </div>

</>
  );
};
