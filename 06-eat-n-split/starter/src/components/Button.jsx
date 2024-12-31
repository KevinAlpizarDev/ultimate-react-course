
export const Button = ({children, onClick, className}) => {
  return (
    <button onClick={onClick} type="button" className=" bg-color-dark font-bold rounded-lg text-sm px-3 py-2 ">
    {children}
  </button>
  )
}
