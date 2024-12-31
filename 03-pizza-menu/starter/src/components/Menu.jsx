// import { Pizza } from "./Pizza"

// import {pizzaData} from "../services/data"
// export const Menu = () => {



//       const pizzas = pizzaData
// const numPizzas = pizzas.length







//   return (

// <main>



  
//   <h1>Our Pizza</h1>
//   {numPizzas > 0 ?(
  

// <>
// <p>
//   Authentic Itaian cuisine. 6 creative dishes to choose from. Alll from our stone oven, all organic, all delicious.
// </p>


//   <ul>
//   {pizzas.map(pizza => (
  
//   <Pizza key={pizza.name} pizzaObj={pizza}/>
  
//     )   )}
//   </ul>

// </>
  
  
//   ): (<p>We´re still working on our menu. Please come back later :)</p>)}
  
    
// </main>




//   )
// }

import {Pizza} from "./Pizza"
import {pizzaData} from "../services/data"


export const Menu = () => {
  return (
   <ul>
{pizzaData.map((pizza) => 
<Pizza pizzaObj={pizza} />

)}

   </ul>
  )
}

