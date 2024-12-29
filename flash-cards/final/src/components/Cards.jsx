import { useState } from "react";

export const Cards = ({questions}) => {

    const [selectorId, setSelectorId] = useState(null)


    
const handleClick = (id) => {
setSelectorId(id !== selectorId ? id : null)
console.log(id);

}

  return (
 <>
  {questions.map(question => (
    <li
    key={question.id} 
    onClick={()=> handleClick(question.id)}
    className={`${question.id === selectorId ? "bg-selected text-white border-border-selected " : "text-xs bg-gray-100"} flex justify-center items-center  text-lg text-center h-52 rounded-md  px-12  border`}>{question.id === selectorId ? question.answer:  question.question  }</li>
  ))}
 </>
  )
}

