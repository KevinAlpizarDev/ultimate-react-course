import { initialFriends } from './services/friends'
import { FriendsList } from './components/FriendsList';


import React from 'react'

export const App = () => {
// console.log(initialFriends);


  return (
    // <div>
    //   <h1>App</h1>


    
    //   < FriendsList friends={initialFriends}/>

    
    // </div>
    

<>
<div className='flex w-full h-screen bg-red-600 '>
<div className='w-1/2 h-full '>
    <div className='flex justify-end items-end h-1/2 bg-white pl-44 pr-3'>
    < FriendsList friends={initialFriends}/>
    </div>
    <div className='h-1/2  bg-white pl-44 pr-3'>


    <div className='flex  flex-col justify-center items-center h-72 rounded-lg'>



<div>



</div>
       <div className='flex justify-between items-center bg-color-lightest rounded-t-lg w-full h-64 px-5 mt-2'>
        <label htmlFor="">Item friend</label> 
        <input className='w-48 h-8' type="text" />
       </div>
       <div className='flex justify-between items-center bg-color-lightest  w-full h-64 px-5'>
        <label htmlFor="">Item friend</label>
        <input className='w-48 h-8' type="text" />
       </div>
       <div className= 'flex justify-end items-center bg-color-lightest   w-full h-64  rounded-b-lg  px-5'>
       <button
              type="button"
              className=" w-48 bg-color-dark rounded-lg font-bold text-sm px-4 py-2"
            >
              Add
            </button>
       </div>
       
       <div className='flex justify-end items-center  bg-white px-5 w-full h-full'>
       <button
              type="button"
              className=" bg-color-dark font-bold rounded-lg text-sm px-4 py-2"
            >
              Close
            </button>
       </div>






    </div>






    </div>
</div>
<div className='w-1/2 bg-white flex items-center'>
    <div className=' bg-color-light w-full h-96 rounded-lg mb-32 mr-36 p-5'>
      
     <div className='flex justify-start items-end h-16 pl- uppercase text-2xl font-bold text-slate-700 pl-10'>
      Split a bill with sarah
     </div>

     <div className='flex flex-col justify-center items-center w-full h-80  p-10'>
  
      <div className='flex justify-between items-center   w-full  mb-5'>
        <p className=''>text fome </p>
       <input className='w-40 h-9' type="text" placeholder='first input' />
      </div>
      
      <div className='flex justify-between items-center   w-full  mb-5'>
        <p className=''>text fome </p>
       <input className='w-40 h-9' type="text" placeholder='first input' />
      </div>
      
      <div className='flex justify-between items-center   w-full  mb-5'>
        <p className=''>text fome </p>
       <input className='w-40 h-9' type="text" placeholder='first input' />
      </div>
      
      <div className='flex justify-between items-center   w-full  mb-5'>
        <p className=''>text fome </p>
       <input className='w-40 h-9' type="text" placeholder='first input' />
      </div>
      
    
     </div>
    </div>
</div>
</div>

</>

  )
}

