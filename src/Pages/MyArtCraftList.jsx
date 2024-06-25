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

  const customYes = currentUsersList.filter(
    (showYes) => showYes.customization === "yes"
  );

  const customNo = currentUsersList.filter(
    (showNo) => showNo.customization === "no"
  );

  const handleYes = () => {
    setNewLists(customYes);
  };

  const handleNo = () => {
    setNewLists(customNo);
  };

  return (
    <div>
      
      <div className="mb-12 w-[90%] mx-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  rounded-none bg-[#f0932b] text-white">
            Customization
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu  z-[1] w-32 p-2 shadow"
          >
            <li className=" bg-green-200">
              <a className="hover:rounded-none" onClick={handleYes}>Yes</a>
            </li>
            <li className="bg-blue-200">
              <a className="hover:rounded-none"  onClick={handleNo}>No</a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-center font-bold text-3xl my-8">
        Art and Craft by: {user.displayName}
      </h2>
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
