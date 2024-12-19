import { Pizza } from "./Pizza"
export const Menu = () => {


    const pizzaData = [
        {
          name: "Focaccia",
          ingredients: "Bread with italian olive oil and rosemary",
          price: 6,
          photoName: "pizzas/focaccia.jpg",
          soldOut: true,
        },
        {
          name: "Pizza Margherita",
          ingredients: "Tomato and mozarella",
          price: 10,
          photoName: "pizzas/margherita.jpg",
          soldOut: true,
        },
        {
          name: "Pizza Spinaci",
          ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
          price: 12,
          photoName: "pizzas/spinaci.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Funghi",
          ingredients: "Tomato, mozarella, mushrooms, and onion",
          price: 12,
          photoName: "pizzas/funghi.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Salamino",
          ingredients: "Tomato, mozarella, and pepperoni",
          price: 15,
          photoName: "pizzas/salamino.jpg",
          soldOut: true,
        },
        {
          name: "Pizza Prosciutto",
          ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
          price: 18,
          photoName: "pizzas/prosciutto.jpg",
          soldOut: false,
        },
      ];
      const pizzas = pizzaData
const numPizzas = pizzas.length







  return (

<main>



  
  <h1>Our Pizza</h1>
  {numPizzas > 0 ?(
  

<>
<p>
  Authentic Itaian cuisine. 6 creative dishes to choose from. Alll from our stone oven, all organic, all delicious.
</p>


  <ul>
  {pizzas.map(pizza => (
  
  <Pizza key={pizza.name} pizzaObj={pizza}/>
  
    )   )}
  </ul>

</>
  
  
  ): (<p>We´re still working on our menu. Please come back later :)</p>)}
  
    
</main>




  )
}
