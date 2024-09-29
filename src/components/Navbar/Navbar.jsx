import Downloadbtn from "../../components/DownloadBtn/Download_btn";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="p-5 flex flex-col md:flex-row items-center md:justify-between mx-5 md:mx-20">
        <div className="font-raleway text-cyan-400 font-semibold text-2xl hover:text-yellow-400 mb-5 md:mb-0 ">
          Portfolio
        </div>

        <div className="flex flex-row md:flex-row gap-5 text-center font-raleway">
          <p className="text-blue-400 hover:underline underline-offset-4 cursor-pointer font-semibold hover:text-cyan-400">
            <NavLink to='/'>Home</NavLink>
          </p>
          <p className="text-blue-500 hover:underline underline-offset-4 cursor-pointer font-semibold hover:text-cyan-400">
            <NavLink to='/about'>About</NavLink>
          </p>
          <p className="text-blue-600 hover:underline underline-offset-4 cursor-pointer font-semibold hover:text-cyan-400">
          <NavLink to='/projects'>Project</NavLink>
          </p>
          
          <p className="text-blue-800 hover:underline underline-offset-4 cursor-pointer font-semibold hover:text-cyan-400">
          <NavLink to='/contact'>Contact</NavLink>
          </p>
        </div>

        <div className="mt-5 md:mt-0">
          <Downloadbtn />
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
