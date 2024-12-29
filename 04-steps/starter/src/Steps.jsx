import { useState } from "react"

export const Steps = () => {


const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income",
]



 const [step, setStep] = useState(1)

const [isOpen, setIsOpen] = useState(true)


console.log(step);




const handlePrevious = () => {

 step > 1 && setStep((s) =>s - 1)

}

const handleNext = () => {

step < 3 && setStep((s)=> s + 1)

}


  return (
<div>
  <button onClick={() => setIsOpen(is => !is) }>&times;</button>
{

isOpen && (
  <div className=" py-4 px-10 w-10/12 h-64 mt-10  rounded-lg bg-steps" >
   
<div className="flex justify-between h-1/3 px-8">
<div className={` flex w-8 h-8 rounded-full justify-center items-center ${step >= 1 ? "bg-active text-white" : "bg-number text-black"}`}>1</div>
 <div className={`${step >= 2 ? "bg-active text-white" : "bg-numbers text-black"} flex justify-center items-center  h-8 w-8 rounded-full `}>2</div>
 <div className={`${step >= 3 ? "bg-active text-white"  : "bg-numbers text-black" }  flex justify-center items-center w-8 h-8 rounded-full `}>3</div>

</div>
<div className="h-1/3 flex justify-center items-center">
<h1 className="font-extrabold text-2xl">
{messages[step - 1]}
</h1>
</div>
<div className="w-full flex justify-between items-center h-1/3 bg-steps ">
<button  className="bg-buttons text-white h-1/2 p-5 rounded-full flex justify-center items-center" onClick={handlePrevious}>Previous</button>
 <button className="bg-buttons text-white h-1/2 p-5 rounded-full flex justify-center items-center" onClick={ handleNext}>Next</button>
</div>

</div>
)

}
</div>
  )
}


