import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { PackList } from "./components/PackList";
import { Stats } from "./components/Stats";
import { useState } from "react";

// const initialItems = [
//   {
//     id: 1,
//     description: "Passports",
//     quantify: 2,
//     packed: true,
//   },
//   {
//     id: 2,
//     description: "Tickets",
//     quantify: 2,
//     packed: true,
//   },
// ];



export const TravelList = () => {


  

  // const [description, setDescription] = useState("");
  // const [quantify, setQuantify] = useState(1);
  const [items, setItems] = useState([])
 

  const handleAddItems = (item) => {
    setItems((items) => [...items, item])
  }

  
const handleDeleteItem= (id) => {
setItems((items) => items.filter(items => items.id !== id))
}


const handleToggleItem = (id) => {
setItems((items) => items.map(item =>
   item.id === id ? {...item, packed: !item.packed } : item ))
}


const handleCleanItems = () => {


  if (items.length === 0 ) {
    alert("Alerta")
  }else{
 
    const confirmed = window.confirm(
      "Are you sure you want delecte all items?"
    )
  
  if  (confirmed ) {
  setItems([])
  }
  
  };
  
  }
  
  return (
    <>
      <Logo />
      <Form
        onAddItems={handleAddItems}
      />
      <PackList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onCleanItems={handleCleanItems}
      />
      <Stats
       items={items } 
       />
    </>
  );
};