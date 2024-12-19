/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend:{
      opacity: {
        "sold-out": '.67',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "body": {
          DEFAULT: "#f7f2e9",
        }, 
       
      },
      keyframes: {
        "move-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "move-down": "move-down 1s ease-in-out",
      },
    },
  },
  plugins: [],
}




// @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap");

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// html {
//   font-size: 62.5%;
// }

// body {
//   font-family: "Roboto Mono", sans-serif;
//   color: #252525;
//   font-weight: 400;
//   background-color: #f7f2e9;
//   border-bottom: 1.6rem solid #edc84b;
//   min-height: 100vh;
//   padding: 3.2rem;
//   padding-bottom: 6rem;
// }

// .container {
//   max-width: 80rem;
//   margin: 0 auto;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 4.8rem;
// }

// /* *************** */

// .header {
//   align-self: stretch;
// }

// .header h1 {
//   /* Non-accessible color */
//   color: #edc84b;
//   /* color: #af8602; */

//   text-transform: uppercase;
//   text-align: center;
//   font-size: 5.2rem;
//   font-weight: 300;
//   letter-spacing: 3px;
//   position: relative;
//   width: 100%;
//   display: block;
// }

// .header h1::before,
// .header h1::after {
//   display: block;
//   content: "";
//   height: 3px;
//   width: 4rem;
//   background-color: #edc84b;
//   position: absolute;
//   top: calc(50% - 1px);
// }

// .header h1::before {
//   left: 0;
// }

// .header h1::after {
//   right: 0;
// }

// /* *************** */

// .menu {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 4rem;
// }

// .menu h2 {
//   display: inline-block;
//   padding: 1rem 0;
//   border-top: 2px solid currentColor;
//   border-bottom: 2px solid currentColor;
//   font-size: 2.4rem;
//   text-transform: uppercase;
//   letter-spacing: 3px;
//   font-weight: 500;
// }

// .menu > p {
//   font-size: 1.5rem;
//   text-align: center;
//   line-height: 1.6;
//   width: 80%;
// }

// .pizzas {
//   list-style: none;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 4.8rem;
// }

// .pizza {
//   display: flex;
//   gap: 3.2rem;
// }

// .pizza img {
//   width: 12rem;
//   aspect-ratio: 1;
//   align-self: start;
// }

// .pizza div {
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   padding: 0.4rem 0;
// }

// .pizza h3 {
//   font-size: 2rem;
//   font-weight: 400;
// }

// .pizza p {
//   font-size: 1.4rem;
//   font-weight: 300;
//   font-style: italic;
//   margin-bottom: auto;
// }

// .pizza span {
//   display: block;
//   font-size: 1.6rem;
// }

// .pizza.sold-out {
//   color: #888;
// }

// .pizza.sold-out img {
//   filter: grayscale();
//   opacity: 0.8;
// }

// /* *************** */

// .footer {
//   font-size: 1.4rem;
// }

// .order {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 2.4rem;
// }

// .btn {
//   color: inherit;
//   font-family: inherit;
//   border: none;
//   font-size: 1.4rem;
//   font-weight: 500;
//   background-color: #edc84b;
//   padding: 1.4rem 3.2rem;
//   cursor: pointer;
//   transition: all 0.2s;
// }

// .btn:hover {
//   background-color: #e9bb24;
// }
