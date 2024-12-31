import { Button } from "./Button"


export const FormSplitBill = ({selectedFriend}) => {
  return (
    <form className=' bg-color-light w-full h-96 rounded-lg mb-32 mr-36 p-5'>
      
   
    <h2  className='flex justify-start items-end h-16 pl- uppercase text-2xl font-bold text-slate-700 pl-10'>Split a bill with {selectedFriend.name}</h2>

    <div className='flex flex-col justify-center items-center w-full h-80  p-10'>
 
     <div className='flex justify-between items-center   w-full  mb-5'>
       <label className=''>Bill value</label>
      <input className='w-40 h-9' type="text" placeholder='first input' />
     </div>
     
     <div className='flex justify-between items-center   w-full  mb-5'>
     <label className=''>Your expense</label>
      <input className='w-40 h-9' type="text" placeholder='first input' />
     </div>
     
     <div className='flex justify-between items-center   w-full  mb-5'>
     <label className=''>{selectedFriend.name}´s expense </label>
      <input className='w-40 h-9' type="text" placeholder='first input' />
     </div>
     
     <div className='flex justify-between items-center   w-full  mb-5'>
     <label className=''>Who is playing the bill</label>
      <input className='w-40 h-9' type="text" placeholder='first input' />
     </div>
     
   
    </div>
   </form>
  )
}

