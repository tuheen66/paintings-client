import { Link } from "react-router-dom";

const Login = () => {
  const handleSignIn = (e) => {
    e.preventDefault;
  };

  return (
    <div>
      <div className="w-[90%] lg:w-1/2 bg-[#f5a44869] p-8 mx-auto text-gray-700 my-8">
        <h2 className="text-center text-4xl font-bold">Please Login</h2>

        <form onSubmit={handleSignIn} className="form-action">
          <div className="w-full">
            <label className="pl-4 font-bold" htmlFor="email">
              Your email:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2"
              type="email"
              placeholder="Your email"
              name="email"
              id="email"
            />
          </div>

          <div className="w-full relative">
            <label className="pl-4 font-bold" htmlFor="password">
              Password:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2"
              // type={showPassword ? "text" : "password"}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
            {/* <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-9"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span> */}
          </div>

          <input
            className="btn rounded-none bg-[#30336b8f] w-full border-none text-white text-lg mt-6 "
            type="submit"
            value="Login"
          />
        </form>

        <div className="text-center mt-4 space-y-2">
          <p>
            Sign In with
            <span
            //   onClick={handleGoogleSignIn}
              className="text-[#eb4d4b] font-bold mx-2 cursor-pointer hover:underline"
            >
              Google
            </span>
            OR <span className="font-bold text-blue-600 ml-2">Github</span>
          </p>
          <p>
            New to this site? Please
            <Link to="/register" className="font-bold ml-2 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
