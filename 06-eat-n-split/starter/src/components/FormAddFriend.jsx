import { useState } from "react"

export const FormAddFriend = ({onAddFriend}) => {


const [name, setName ] = useState("")
const [image, setImage ] = useState("https://i.pravatar.cc/48")

const handleSubmit = (e) => {

e.preventDefault()

if(!name || !image) return 


const id = crypto.randomUUID()






const newFriend = {

id, 
name,
image: `${image}?=${id}`,
balance: 0,




}

onAddFriend(newFriend);


}


  return (
   

    <form onSubmit={handleSubmit} className='flex  flex-col justify-center items-center h-56 rounded-lg w-full  mb-4'>


       <div className='flex justify-between items-center bg-color-lightest rounded-t-lg w-full h-64 px-5 mt-2'>
        <label htmlFor="">Item friend</label> 
        <input value={name} onChange={(e) => setName(e.target.value)} className='w-48 h-8' type="text" />
       </div>
       <div className='flex justify-between items-center bg-color-lightest  w-full h-64 px-5'>
        <label htmlFor="">Item friend</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} className='w-48 h-8' type="text" />
       </div>
       <div className= 'flex justify-end items-center bg-color-lightest   w-full h-64  rounded-b-lg  px-5'>
       <button
              type="submit"
              
              className=" w-48 bg-color-dark rounded-lg font-bold text-sm px-4 py-2"
              // onClick={handleSubmit()}
            >
              Add
            </button>
       </div>
       
  






    </form>


  )
}

