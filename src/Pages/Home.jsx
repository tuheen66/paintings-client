import { useLoaderData } from "react-router-dom";
import CraftCardHome from "../components/CraftCardHome";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  const craftItems = useLoaderData();

  const myCraftItems = craftItems.filter(
    (craftItem) => craftItem.email === "hassan.monirul@gmail.com"
  );

  console.log(myCraftItems);

  return (
    <div className="w-[90%] mx-auto">
      <Slider></Slider>
      <div>
        <h2 className="text-4xl font-bold text-center  mb-8">Craft Items</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myCraftItems.map((myCraft) => (
          <CraftCardHome key={myCraft._id} myCraft={myCraft}></CraftCardHome>
        ))}
      </div>
      <h2 className="text-4xl font-bold text-center mt-16  ">Categories</h2>
      <Categories></Categories>
    </div>
  );
};

export default Home;
