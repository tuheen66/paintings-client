import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then(() => console.log("logged out successfully "));
  };

  return (
    <div>
      <div className="flex flex-col gap-4 lg:gap-4 lg:flex-row justify-between items-center w-[90%] mx-auto bg-blue-200 shadow-xl pb-8 lg:pb-0 mb-4  px-2">
        <div className="flex items-center">
          <img className="w-20 py-2" src={logo} alt="" />
          <h1 className="font-bold text-2xl">
            <span className="text-[#d1232a]">COLORFUL</span>{" "}
            <span className="text-[#24aa0f]">CANVAS</span>{" "}
          </h1>
        </div>
        <div>
          <div className="flex flex-col md:flex-row font-semibold text-gray-700 justify-between items-center gap-2 md:gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allCraftItem">All Art & Craft Items</NavLink>
            <NavLink to="/addCraftItem">Add Craft Item</NavLink>
            <NavLink to="/myArtCraftList">My Art & Craft List</NavLink>
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
            {user ? (
              // setting username on hover of user image
              <div className="flex items-center gap-4">
                <div className=" relative group ">
                  <img className="w-14 rounded-full  " src={user.photoURL} />

                  <p className="opacity-0 group-hover:opacity-100 absolute w-44 text-center -bottom-4 right-16 text-xl text-gray-700 bg-gray-200 font-semibold">
                    {user.displayName}
                  </p>
                </div>

                <button
                  onClick={handleSignOut}
                  className="btn btn-sm lg:btn-md rounded-none border-none bg-[#f0932b] hover:bg-[#30336b] text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button className="btn btn-sm lg:btn-md border-none rounded-none mr-2 bg-[#f0932b] hover:bg-[#30336b] text-white">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-sm lg:btn-md rounded-none border-none bg-[#f0932b] hover:bg-[#30336b] text-white">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
