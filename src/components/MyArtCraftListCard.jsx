import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyArtCraftListCard = ({ myList }) => {
  const {
    _id,
    image,
    itemName,
    subcategoryName,
    customization,
    description,
    price,
    rating,
    stockStatus,
    processingTime,
  } = myList;
  return (
    <div>
      <div className="flex flex-col bg-blue-200 shadow-2xl shadow-gray-500  duration-500 transition hover:scale-105">
        <img src={image} alt="" />

        <div className="flex-grow space-y-2 p-4">
          <p className="font-bold text-2xl">{itemName}</p>
          <p>
            <span className="font-bold">Sub-category: </span>
            {subcategoryName}
          </p>
          <p>
            <span className="font-bold">Price: </span>$ {price}
          </p>
          <p>
            <span className="font-bold">Customization: </span>
            {customization}
          </p>
          <p>
            <span className="font-bold">Rating: </span>
            {rating}
          </p>
          <p>
            <span className="font-bold">Stock Status: </span>
            {stockStatus}
          </p>
          <p>
            <span className="font-bold">Processing Time: </span>
            {processingTime}
          </p>

          <p>
            <span className="font-bold">Description:</span>
            {description.slice(0, 150) + " . . ."}
          </p>

          <div className="flex justify-center gap-8 px-4">
            <Link to={`/updateCraftItem/${_id}`}>
              <button className="btn btn-sm bg-[#2ecc71] hover:bg-[#30336b]   border-none text-white rounded-none font-bold mt-4">
                Update
              </button>
            </Link>

            <button className="btn btn-sm bg-[#e74c3c] hover:bg-[#30336b] w-1/2  border-none text-white rounded-none font-bold mt-4">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtCraftListCard;
