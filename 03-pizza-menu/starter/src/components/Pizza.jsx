
// export const Pizza = ({pizzaObj}) => {


// // console.log(props.pizzaObj.soldOut);



//   return (
//     <>
//     <li className={`bg-body ${pizzaObj.soldOut ? "opacity-sold-out" : "" }`}>

//     <img src={pizzaObj.photoName} alt="" />
//     <h1>{pizzaObj.name}</h1>
//     <h1>{pizzaObj.ingredient}</h1>


//     <h1>{pizzaObj.soldOut ? "SOUL OUT" : pizzaObj.price}</h1>
  
//     </li>


//     </>
//   )
// }


export const Pizza = ({pizzaObj}) => {


  return (
  <li>

    <img src={pizzaObj.photoName} alt="" />
<div>
<h3>{pizzaObj.name}</h3>
<p>{pizzaObj.ingredients}</p>
<span>{pizzaObj.price}</span>

</div>




  </li>
  )
}

