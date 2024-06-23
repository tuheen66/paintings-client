

const AddCraftItem = () => {
    return (
        <div>
            <div className="w-[90%] lg:w-1/2 bg-[#7ed6df] p-8 mx-auto text-gray-700 mb-8">
        <h2 className="text-center text-4xl font-bold">Add Craft Item</h2>

        <form className="form-action">
          {/* user name and user email row */}
          <div className="lg:flex gap-4 mt-8">
            <div className="w-full">
              <label className="pl-4 font-bold" htmlFor="userName">
                User name:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2"
                type="text"
                placeholder="User name"
                name="userName"
                id="userName"
              />
            </div>

            <div className="w-full">
              <label className="pl-4 font-bold" htmlFor="email">
                User email:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2"
                type="email"
                placeholder="User email"
                name="email"
                id="email"
              />
            </div>
          </div>
          {/* image row */}
          <div className="w-full">
            <label className="pl-4 font-bold" htmlFor="image">
              Image URL:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2"
              type="text"
              placeholder="Image url"
              name="image"
              id="image"
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
                placeholder="Item Name"
                name="itemName"
                id="item_name"
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
                name="subcategoryName"
                id="subcategory_Name"
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
                name="price"
                id="price"
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
                name="rating"
                id="rating"
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
                name="customization"
                id="customization"
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
                name="processingTime"
                id="processing_time"
              />
            </div>
          </div>
          {/* seasonality */}
          <div className="flex gap-4">
            <div className="w-full">
              <label className="pl-4 font-bold" htmlFor="stock_status">
              Stock Status:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2"
                type="text"
                placeholder="Stock Status - In stock OR Made to Order"
                name="stockStatus"
                id="stock_status"
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
                name="description"
                id="description"
              ></textarea>
            </div>
          </div>

          {/* button */}
          <input
            className="btn rounded-none bg-[#f0932b] text-white w-full border-none text-lg hover:bg-[#30336b] "
            type="submit"
            value="Add Craft Item"
          />
        </form>
      </div>
            
        </div>
    );
};

export default AddCraftItem;