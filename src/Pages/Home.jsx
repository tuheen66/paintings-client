import { useLoaderData } from "react-router-dom";

const Home = () => {
    
  const craftItems = useLoaderData();

  const myCraftItems = craftItems.filter(
    (craftItem) => craftItem.email === "hassan.monirul@gmail.com"
  );

  console.log(myCraftItems);

  return (
    <div>
      <h2>Home page</h2>
    </div>
  );
};

export default Home;
