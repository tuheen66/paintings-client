/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Bounce } from "react-awesome-reveal";

const CategoryCard = ({ category }) => {
  const { _id, subcategory, image, description } = category;
  return (
    <Link to={`/subCategoryDetails/${_id}`}>
      <div className="my-4 bg-[#a45eea4f] shadow-lg shadow-gray-400 p-4 hover:scale-105 duration-500">
        <Bounce>
          <h2 className="text-center text-3xl font-bold mb-4">{subcategory}</h2>
        </Bounce>
        <div className="">
          <img src={image} alt="" />
          <p className="mt-4 text-justify ">
            <span className="font-bold">Description : </span>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
