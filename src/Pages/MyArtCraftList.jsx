import { useLoaderData } from "react-router-dom";
import MyArtCraftListCard from "../components/MyArtCraftListCard";

const MyArtCraftList = () => {
  const myLoadedList = useLoaderData();

  return (
    <div className="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {myLoadedList.map((myList) => (
        <MyArtCraftListCard
          key={myList._id}
          myList={myList}
        ></MyArtCraftListCard>
      ))}
    </div>
  );
};

export default MyArtCraftList;
