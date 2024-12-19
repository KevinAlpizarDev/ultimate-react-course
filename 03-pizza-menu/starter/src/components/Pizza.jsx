
export const Pizza = ({pizzaObj}) => {


// console.log(props.pizzaObj.soldOut);



  return (
    <>
    <li className={`bg-body ${pizzaObj.soldOut ? "opacity-sold-out" : "" }`}>

    <img src={pizzaObj.photoName} alt="" />
    <h1>{pizzaObj.name}</h1>
    <h1>{pizzaObj.ingredient}</h1>


    <h1>{pizzaObj.soldOut ? "SOUL OUT" : pizzaObj.price}</h1>
  
    </li>


    </>
  )
}

