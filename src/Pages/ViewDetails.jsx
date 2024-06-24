import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const loadedDetails = useLoaderData();

  const {
    image,
    itemName,
    subcategoryName,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    description,
  } = loadedDetails;

  return (
    <div className="w-[90%] mx-auto mb-8 ">
      <h2 className="font-bold text-3xl text-center my-8">{itemName}</h2>
      <div className="grid grid-cols-2 gap-8 mb-4 items-center bg-green-100 p-4">
        <div className="">
          <img className=" mx-auto" src={image} alt="" />
        </div>

        <div className="">
          <div className=" space-y-4 px-4  ">
            <p></p>
            <p>
              <span className="font-bold">Sub-Category: </span>
              {subcategoryName}
            </p>
            <p>
              <span className="font-bold">Price: </span>
              {price}
            </p>
            <p>
              <span className="font-bold">Rating: </span>${rating}
            </p>
            <p>
              <span className="font-bold">Customization: </span>
              {customization}
            </p>
            <p>
              <span className="font-bold">Processing Time: </span>
              {processingTime}
            </p>
            <p>
              <span className="font-bold">Stock Status: </span>
              {stockStatus}
            </p>
            <p className="text-justify">
              <span className="font-bold ">Description:</span> {description}
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ViewDetails;
