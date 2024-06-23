import { useLoaderData } from "react-router-dom";
import CraftCardHome from "../components/CraftCardHome";
import Slider from "../components/Slider";

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
    </div>
  );
};

export default Home;
