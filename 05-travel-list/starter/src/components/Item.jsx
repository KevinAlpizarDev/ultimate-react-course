
export const Item = ({item, onDeleteItem, onToggleItem}) => {

    // console.log(item.packed);
    
  return (
   <div>
     <li >
      <input type="checkbox" value={item.checked} onChange={()=> onToggleItem(item.id)} />
      <span className={`${item.packed ? "line-through  " : ""}    `}>{item.quantify}{item.description}</span>
      </li>
      <button onClick={()=> onDeleteItem(item.id)}>❌</button>
   </div>
  )
}
