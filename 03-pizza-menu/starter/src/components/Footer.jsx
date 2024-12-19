import { Order } from "./Order"


export const Footer = () => {

    const hour = new Date().getHours()
const openHour = 12
const closeHour = 22 
const isOpen = hour >= openHour && hour <= closeHour
// isOpen ? alert("We´re currently open!") : alert("Sorry we´re closed!") 

    // console.log(hour);
    // console.log(isOpen);
    
    
  return (
    <div className="bg-body">
      {/* <h1>{new Date().toLocaleDateString()}</h1> */}
{
  isOpen ? (

<Order closeHour={ closeHour} openHour={openHour}/>

  ): <p>We´re happy to welcome you between {openHour}:00 and close{closeHour}:00</p>

}
    </div>
  )
}
