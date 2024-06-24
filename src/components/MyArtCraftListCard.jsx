import { Link } from "react-router-dom";
import Swal from "sweetalert2";


/* eslint-disable react/prop-types */
const MyArtCraftListCard = ({ newList, newLists, setNewLists }) => {
  const {
    _id,
    image,
    itemName,
    
    customization,
    description,
    price,
    rating,
    stockStatus,
    
  } = newList;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/art-craft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success",
              });
              const remaining = newLists.filter(
                (listNew) => listNew._id !== _id
              );
              setNewLists(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col bg-blue-200 shadow-2xl shadow-gray-500  duration-500 transition hover:scale-105">
        <img src={image} alt="" />

        <div className="flex-grow space-y-2 p-4">
          <p className="font-bold text-2xl">{itemName}</p>
          
          <p>
            <span className="font-bold">Price: </span>$ {price}
          </p>
          <p>
            <span className="font-bold">Rating: </span>
            {rating}
          </p>
          <p>
            <span className="font-bold">Customization: </span>
            {customization}
          </p>
         
          <p>
            <span className="font-bold">Stock Status: </span>
            {stockStatus}
          </p>
          

          <p>
            <span className="font-bold">Description:</span>
            {description.slice(0, 150) + " . . ."}
          </p>

          <div className=" flex justify-between gap-8 px-2">
            <Link to={`/updateCraftItem/${_id}`} className="w-1/2">
              <button className="btn btn-sm bg-[#2ecc71] hover:bg-[#30336b] w-full  border-none text-white rounded-none font-bold mt-4">
                Update
              </button>
            </Link>

            <div className="w-1/2">
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-sm bg-[#e74c3c] hover:bg-[#30336b] w-full  border-none text-white rounded-none font-bold mt-4"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtCraftListCard;
