
import { Friend } from "./Friend";
export const FriendsList = ({ friends }) => {
    return (
      <div className="w-full ">
        <ul className=" ">
          {friends.map((friend) => (
            <Friend key={friend.id} friend={friend} />
          ))}
        </ul>
      </div>
    );
  };
  