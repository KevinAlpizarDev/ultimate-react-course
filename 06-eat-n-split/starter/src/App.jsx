import { initialFriends } from './services/friends'
import { FriendsList } from './components/FriendsList';
import { FormAddFriend } from './components/FormAddFriend';
import { Button } from "./components/Button";
import { FormSplitBill } from './components/FormSplitBill';

import { useState } from 'react'

export const App = () => {


  
// console.log(initialFriends);
const [showAddFriend, setShowAddFriend] = useState(false)

const [friends, setFriends] = useState([])


const [selectedFriend, setSelectedFriend] = useState(null)

const handleShowAddFriend = () => {
  setShowAddFriend(show => !show )
}


const handleAddFriend = (friend) => {
setFriends((friends) => [...friends, friend] )

setShowAddFriend(false)
}

const handleSelection = (friend) => {
  // setSelectedFriend(friend)
//  console.log(friend);
setSelectedFriend((curr) => curr?.id === friend.id ? null : friend)
setShowAddFriend(false)
  }



  return (

<>
<div className='flex w-full h-screen  '>
<div className='w-1/2 h-full'>
    <div className='flex justify-end items-end h-1/2  pl-44 pr-3'>
    < FriendsList friends={friends} selectedFriend={selectedFriend}  onSelection={handleSelection}   />
    </div>
    <div className='h-1/2  bg-white pl-44 pr-3 flex flex-col items-end justify-start  mt-3'>
{ showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />  }
  <Button  onClick={handleShowAddFriend} >{showAddFriend ? "Close" : "Add friend"  }</Button>
  


    </div>
</div>
<div className='w-1/2 bg-white flex items-center'>
{selectedFriend && < FormSplitBill selectedFriend={selectedFriend} />}
</div>
</div>

</>

  )
}

