
export const Stats = ({items}) => {

if(!items.length)
  return(
<p>Start adding some items to your packing list 🚀</p>
  )
  const numItems = items.length
  const numPacked = items.filter(item => item.packed).length
  const percentage = Math.round((numPacked / numItems)* 100)
  
  
  return (
 <footer>
  {
   percentage === 100 ? "You got everithing! Ready to go "
   : 
   `  you have ${numItems} items on your list, and you number of packed ${numPacked} porcentage ${ percentage}`
  }
 </footer>
  )
}
