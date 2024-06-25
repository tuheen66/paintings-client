import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraftItem = () => {
  const loadedCraftItems = useLoaderData();
  const {
    _id,
    
    image,
    itemName,
    subcategoryName,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    description,
  } = loadedCraftItems;

  const handleUpdateCrafts = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.image.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const description = form.description.value;

    const updatedCraftItem = {
      image,
      itemName,
      subcategoryName,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      description,
    };

    fetch(`http://localhost:5000/arts-craft/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Craft item updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="w-[90%] lg:w-1/2 bg-[#7ed6df] p-8 mx-auto text-gray-700 my-8">
        <h2 className="text-center text-4xl font-bold">Update Craft Item</h2>

        <form onSubmit={handleUpdateCrafts} className="form-action">
          
          {/* image row */}
          <div className="w-full">
            <label className="pl-4 font-bold" htmlFor="image">
              Image URL:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2"
              type="text"
              placeholder="Image url"
              defaultValue={image}
              name="image"
              id="image"
              required
            />
          </div>

          {/* item and sub_category row */}
          <div className="lg:flex gap-4">
            <div className="w-full">
              <label className="pl-4 font-bold" htmlFor="item_name">
                Item Name:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2"
                type="text"
                defaultValue={itemName}
                name="itemName"
                id="item_name"
                required
              />
            </div>

            <div className="w-full">
              <label className="pl-4 font-bold" htmlFor="subcategory_Name">
                Sub Category:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2"
                type="text"
                placeholder="Sub Category"
                defaultValue={subcategoryName}
                name="subcategoryName"
                id="subcategory_Name"
                required
              />
            </div>
          </div>

          {/* price and rating row */}
          <div className="lg:flex gap-4">
            <div className="w-full">
              <label className="pl-4 font-bold" htmlFor="price">
                Price:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2"
                type="text"
                placeholder="Price"
                defaultValue={price}
                name="price"
                id="price"
                required
              />
            </div>

            <div className="w-full">
              <label className="pl-4 font-bold" htmlFor="rating">
                Rating:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2"
                type="text"
                placeholder="Rating"
                defaultValue={rating}
                name="rating"
                id="rating"
                required
              />
            </div>
          </div>

          {/* customization and processing_time row */}
          <div className="lg:flex gap-4">
            <div className="w-full">
              <label className="pl-4 font-bold" htmlFor="customization">
                Customization:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2"
                type="text"
                placeholder="Customization - yes OR no"
                defaultValue={customization}
                name="customization"
                id="customization"
                required
              />
            </div>

            <div className="w-full">
              <label className="pl-4 font-bold" htmlFor="processing_time">
                Processing_time:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2"
                type="text"
                placeholder="Processing time"
                defaultValue={processingTime}
                name="processingTime"
                id="processing_time"
                required
              />
            </div>
          </div>
          {/* stock status */}
          <div className="flex gap-4">
            <div className="w-full">
              <label className="pl-4 font-bold" htmlFor="stock_status">
                Stock Status:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2"
                type="text"
                placeholder="Stock Status - In stock OR Made to Order"
                defaultValue={stockStatus}
                name="stockStatus"
                id="stock_status"
                required
              />
            </div>
          </div>

          {/* description */}
          <div>
            <div className="w-full">
              <label className="pl-4 font-bold" htmlFor="description">
                Short description:
              </label>
              <textarea
                className="bg-gray-200 py-2 px-4 w-full mb-2"
                rows="3"
                placeholder="Description"
                defaultValue={description}
                name="description"
                id="description"
                required
              ></textarea>
            </div>
          </div>

          {/* button */}
          <input
            className="btn rounded-none bg-[#f0932b] text-white w-full border-none text-lg hover:bg-[#30336b] "
            type="submit"
            value="Update Craft Item"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCraftItem;
