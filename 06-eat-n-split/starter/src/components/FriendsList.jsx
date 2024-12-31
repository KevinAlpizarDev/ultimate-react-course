
import { Friend } from "./Friend";
export const FriendsList = ({ friends, onSelection,  selectedFriend }) => {
    return (
      <div className="w-full h-64 border rounded-lg overflow-auto ">
        <ul className=" ">
          {friends.map((friend) => (
            <Friend key={friend.id} friend={friend}  selectedFriend={ selectedFriend} onSelection={onSelection} />
          ))}
        </ul>
      </div>
    );
  };
