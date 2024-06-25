import {
  FaFacebook,
  FaSquareInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="mb-8 w-full bg-blue-200">
      <footer className="footer footer-center p-10  text-primary-content w-full ">
        <aside className="text-black">
          <img className="w-36 " src={logo} alt="" />
          <p className="font-extrabold text-4xl text-gray-700 tracking-widest">COLORFUL CANVAS </p>

          <p className="text-lg flex gap-4 items-center">
            <span className="text-[#eb2f06] text-2xl">
              <IoHome />
            </span>
            26, Bradford Street, Ontario, Canada
          </p>

          <p className="flex gap-4 items-center text-lg">
            <span className="text-[#eb2f06] text-2xl">
              <BsFillTelephoneFill />
            </span>
            +1 2358 6958 6584
          </p>

          <p className="flex gap-4 items-center text-lg">
            <span className="text-[#eb2f06] text-2xl">
              <MdEmail />
            </span>
            info@colorful-canvas.com
          </p>

          <p className="text-lg">Copyright © 2024 - All right reserved</p>
        </aside>

        <nav>
          <div className="grid grid-flow-col gap-4 text-3xl">
            <FaFacebook className="text-blue-600" />
            <FaYoutube className="text-red-800" />
            <FaTwitter className="text-blue-800" />
            <FaSquareInstagram className="text-red-800" />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
