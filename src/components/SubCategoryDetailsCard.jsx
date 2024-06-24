import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SubCategoryDetailsCard = ({ subcategory }) => {
  const {
    _id,
    image,
    itemName,
    subcategoryName,
    description,
    price,
    rating,
    processingTime,
  } = subcategory;

  return (
    <div className="flex flex-col p-4 bg-blue-200 shadow-2xl hover:scale-105 duration-500 shadow-gray-500 ">
      <h2 className="text-center font-bold text-3xl my-4">{itemName}</h2>

      <img src={image} alt="" />

      <div className="flex-grow space-y-2 mt-4">
        <p>
          <span className="font-bold">Sub-Category: </span>
          {subcategoryName}
        </p>
        <p>
          <span className="font-bold">Processing Time: </span>
          {processingTime}
        </p>
        <p>
          <span className="font-bold">Rating: </span>${rating}
        </p>

        <p>
          <span className="font-bold">Price: </span>
          {price}
        </p>

        <p>
          <span className="font-bold">Description:</span>
          {description.slice(0, 150) + " . . ."}
        </p>
      </div>

      <Link to={`../viewDetails/${_id}`}>
        <button className="btn bg-[#f0932b] hover:bg-[#30336b] rounded-none w-full text-lg border-none text-white font-bold mt-4">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SubCategoryDetailsCard;
