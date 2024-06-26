import { useLoaderData } from "react-router-dom";
import CraftCardHome from "../components/CraftCardHome";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import TypeWriter from "../components/TypeWriter";
import { Slide } from "react-awesome-reveal";
import SmallImageSlider from "../components/SmallImageSlider";
import { useEffect, useState } from "react";
import "../../src/HomeStyles/Home.css";
import ArtBuyingGuide from "../components/ArtBuyingGuide";
import peacock from "../assets/guide.jpeg";

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.getElementById("home").setAttribute("class", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    const checkbox = e.target;
    if (checkbox.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // ---------------------------

  const craftItems = useLoaderData();

  const myCraftItems = craftItems.filter(
    (craftItem) => craftItem.email === "hassan.monirul@gmail.com"
  );

  return (
    <div id="home" className="w-[90%] mx-auto home ">
      <div className="w-12">
        <label className="grid cursor-pointer place-items-center pt-4">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
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

      <Slide>
        <h2 className="text-center font-bold text-3xl my-8">
        
          Art Buying Guide
        </h2>
      </Slide>
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-8 justify-">
        <div className="col-span-3">

        <ArtBuyingGuide></ArtBuyingGuide>
        </div>
        <div className=" lg:col-span-2 w-[90%] mx-auto lg:w-[75%] lg:ml-16 py-4 ">
          <img className="w-full" src={peacock} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
