import { Link } from "react-router-dom";

const handleRegister = (e) => {
  e.preventdefault();

  const form = e.target;

  const name = form.name.value;
  const photo = form.photo.value;
  const email = form.email.value;
  const password = form.password.value;

  e.target.reset();
};

const Register = () => {
  return (
    <div>
      <div className="w-[90%] lg:w-1/2 bg-blue-300 p-8  mx-auto text-gray-700 mb-8">
        <h2 className="text-center text-4xl font-bold">Please Register</h2>

        <form onSubmit={handleRegister} className="form-action">
          <div className="w-full">
            <label className="pl-4 font-bold" htmlFor="name">
              Your name:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2"
              type="text"
              placeholder="Your name"
              name="name"
              id="name"
            />
          </div>

          <div className="w-full">
            <label className="pl-4 font-bold" htmlFor="photo">
              Photo URL:
            </label>
            <input
              className="bg-gray-200 py-2 px-4 w-full mb-2"
              type="text"
              placeholder="photo url"
              name="photo"
              id="photo"
            />
          </div>

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
              //   type={showPassword ? "text" : "password"}
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
            className="btn rounded-none bg-[#f0932b] w-full border-none text-lg mt-6 "
            type="submit"
            value="Register"
          />
        </form>

        <div className="text-center mt-4 space-y-2">
          <p>
            Already have and account? Please
            <Link to="/login" className="font-bold ml-2 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;