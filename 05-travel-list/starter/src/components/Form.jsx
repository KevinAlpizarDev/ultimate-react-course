// Form component
import { useState } from "react";

export const Form = ({onAddItems}) => {

  // const handleAddItems = (item) => {
  //   setItems((items) => [...items, item])
  // }

  const [description, setDescription] = useState("");
  const [quantify, setQuantify] = useState(1);

  const handleSubmit = (event) => {
    
    if (!description) return
    
    event.preventDefault();

    const newItem = {
      description,
      quantify,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem)

  // console.log(items);
  
    setDescription("");
    setQuantify(1);
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <select
          value={quantify}
          onChange={(event) => setQuantify(Number(event.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};