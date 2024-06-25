import { useLoaderData } from "react-router-dom";
import CraftCardHome from "../components/CraftCardHome";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import TypeWriter from "../components/TypeWriter";
import { Slide } from "react-awesome-reveal";
import SmallImageSlider from "../components/SmallImageSlider";

const Home = () => {
  const craftItems = useLoaderData();

  const myCraftItems = craftItems.filter(
    (craftItem) => craftItem.email === "hassan.monirul@gmail.com"
  );

  console.log(myCraftItems);

  return (
    <div className="w-[90%] mx-auto">
      <Slider></Slider>
      <Slide>
        <h2 className="text-4xl font-bold text-center  mb-8">Craft Items</h2>
      </Slide>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {myCraftItems.map((myCraft) => (
          <CraftCardHome key={myCraft._id} myCraft={myCraft}></CraftCardHome>
        ))}
      </div>
      <SmallImageSlider></SmallImageSlider>
      <Slide>
        <TypeWriter></TypeWriter>
      </Slide>
      <Categories></Categories>
    </div>
  );
};

export default Home;
