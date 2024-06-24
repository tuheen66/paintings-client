import { useLoaderData } from "react-router-dom";
import MyArtCraftListCard from "../components/MyArtCraftListCard";
import { useState } from "react";

const MyArtCraftList = () => {
  const myLoadedList = useLoaderData();
  const [newLists, setNewLists] = useState(myLoadedList);

  return (
    <div className="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newLists.map((newList) => (
        <MyArtCraftListCard
          key={newList._id}
          newList={newList}
          newLists={newLists}
          setNewLists={setNewLists}
        ></MyArtCraftListCard>
      ))}
    </div>
  );
};

export default MyArtCraftList;
