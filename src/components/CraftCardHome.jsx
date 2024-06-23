/* eslint-disable react/prop-types */

const CraftCardHome = ({ myCraft }) => {
  const {
    image,
    itemName,
    subcategoryName,
    customization,
    description,
    price,
    rating,
    stockStatus,
    processingTime,
  } = myCraft;

  return (
    <div className="flex flex-col bg-blue-200 shadow-2xl shadow-gray-500  duration-500 transition hover:scale-105">
      <img src={image} alt="" />

      <div className="flex-grow space-y-2 p-4">
        <p className="font-bold text-2xl">{itemName}</p>
        <p>
          <span className="font-bold">Sub-category: </span>
          {subcategoryName}
        </p>
        <p>
          <span className="font-bold">Price: </span>
          $ {price}
        </p>
        <p>
          <span className="font-bold">Customization: </span>{customization}
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
          <span className="font-bold">Description:</span>{" "}
          {description.slice(0, 150) + " . . ."}
        </p>
        {/* <Link to={`view-details/${_id}`}> */}
          <button className="btn btn-sm bg-[#f0932b] hover:bg-[#30336b] w-full border-none text-white rounded-none font-bold mt-4">
            View Details
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default CraftCardHome;
