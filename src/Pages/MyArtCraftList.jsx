import { useLoaderData } from "react-router-dom";
import MyArtCraftListCard from "../components/MyArtCraftListCard";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);

  const myLoadedList = useLoaderData();

  const currentUsersList = myLoadedList.filter(
    (userList) => userList.email === user.email
  );

  const [newLists, setNewLists] = useState(currentUsersList);

  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-8">Art and Craft by: {user.displayName}</h2>
      <div className="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        {newLists.map((newList) => (
          <MyArtCraftListCard
            key={newList._id}
            newList={newList}
            newLists={newLists}
            setNewLists={setNewLists}
          ></MyArtCraftListCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;
