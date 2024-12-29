import { useState } from "react";
import { Item } from "./Item";

export const PackList = ({ items,   onDeleteItem, onToggleItem, onCleanItems}) => {



  const [sortBy, setSortBy] = useState("packed")
let sortedItems;



if (sortBy === "input" ) sortedItems  = items

if(sortBy === "description")sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.decription))  // console.log(initialItems);
 
if(sortBy === "packed") 
  sortedItems = items.slice().sort((a,b )=> Number(a.packed) - Number(b.packed))
   


  return (
    <>
    
<ul >
  {sortedItems.map(item => (
<Item 
key={item.id} 
item={item}
  onDeleteItem={ onDeleteItem} 
   onToggleItem={onToggleItem} />
  )) }
</ul>

<div className="">
  <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
    <option value="input">Sort by imput order</option>
    <option value="description">Sort by imput description</option>
    <option value="packed">Sort by imput stats</option>
  </select>
</div>
<button onClick={onCleanItems} class="bg-transparent border-2 border-terra-cotta text-terra-cotta hover:bg-terra-cotta hover:text-white rounded-md py-2 px-4 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-terra-cotta">
  Limpiar
</button>



    </>

  )
}

 