export const Friend = ({ friend }) => {
    return (
      <div className="flex flex-col items-center justify-center hover:bg-color-lightest  w-full h-20 rounded-lg">
        <li className="flex w-full h-full" key={friend.id}>
          {/* Imagen */}
          <div className="w-1/5 h-full  flex items-center justify-center">
            <img src={friend.image} alt={`${friend.name}'s avatar`} className="h-12 w-12 rounded-full" />
          </div>
  
          {/* Información */}
          <div className="w-3/5 flex flex-col justify-center px-2">
            <p className="font-medium">{friend.name}</p>
            {friend.balance < 0 && (
              <p className="text-rose-fire">
                You owe {friend.name} ${Math.abs(friend.balance)}
              </p>
            )}
            {friend.balance > 0 && (
              <p className="text-lime-sprout">
                {friend.name} owes you ${Math.abs(friend.balance)}
              </p>
            )}
            {friend.balance === 0 && (
              <p className="text-black">You and {friend.name} are even</p>
            )}
          </div>
  
          {/* Botón */}
          <div className="w-1/5 h-full flex items-center justify-center">
            <button
              type="button"
              className=" bg-color-dark font-bold rounded-lg text-sm px-4 py-2"
            >
              Select
            </button>
          </div>
        </li>
      </div>
    );
  };
  