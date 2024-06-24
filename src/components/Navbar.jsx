import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 lg:gap-4 lg:flex-row justify-between items-center w-[90%] mx-auto bg-blue-200 shadow-xl pb-8 lg:pb-0 mb-4  px-2">
        <div className="flex items-center">
          <img className="w-16 py-2" src="" alt="" />
          <h1 className="font-bold text-2xl">
            <span className="text-[#d1232a]">COLORFUL</span>{" "}
            <span className="text-[#73a253]">CANVAS</span>{" "}
          </h1>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all-art-craft">All Art & Craft Items</NavLink>
            <NavLink to="/add-craft-item">Add Craft Item</NavLink>
            <NavLink to="/my-art-craft-list">My Art & Craft List</NavLink>
            
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <div className=" relative group">
              <img className="w-14 rounded-full  " src="" />

              <p className="opacity-0 group-hover:opacity-100 absolute  right-14 flex items-center bottom-0 text-xl bg-gray-200 p-2 text-black font-semibold"></p>
            </div>
          </div>

          <div>
            <div>
              <button className="btn btn-sm lg:btn-md border-none rounded-none mr-2 bg-[#f0932b] hover:bg-[#30336b] text-white">
                Login
              </button>

              <button className="btn btn-sm lg:btn-md rounded-none border-none bg-[#f0932b] hover:bg-[#30336b] text-white">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
