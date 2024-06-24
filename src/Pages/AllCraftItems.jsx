import { Link, useLoaderData } from "react-router-dom";

const AllCraftItems = () => {
  const allCraftItems = useLoaderData();

  
  return (
    <div className="w-[90%] mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Customization</th>
              <th>Rating</th>
              <th>Stock Status</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allCraftItems.map((craftItem) => (
              <tr key={craftItem._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask  h-20 w-20">
                        <img
                          src={craftItem.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="font-bold">{craftItem.itemName}</div>
                      <div className="text-sm opacity-50">
                        {craftItem.subcategoryName}
                      </div>
                    </div>
                  </div>

                </td>
                <td>$ {craftItem.price}</td>
                <td>{craftItem.customization}</td>
                <td>{craftItem.rating}</td>
                <td>{craftItem.stockStatus}</td>
                <th>
                  <Link to={`/viewDetails/${craftItem._id}`}>
                  <button className="btn bg-[#f0932b] text-white rounded-none   btn-sm hover:bg-[#30336b]">View Details</button></Link>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default AllCraftItems;
