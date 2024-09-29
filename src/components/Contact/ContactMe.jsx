import Navbar from "../Navbar/Navbar";
import "./ContactMe.css";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Photo from "../../assets/Anime_Photo.png";
import { useContext } from "react";
import { SkewContext } from "../StoreContext/ContextProvider";
const ContactMe = () => {
  const {skew,handleMouseMove, handleformSubmit, setname, setemail, settextarea, } =
    useContext(SkewContext);

  return (
    <>
      <img
        src={Photo}
        alt=""
        className="absolute -z-10 mix-blend-multiply h-full"
        style={{
          transform: `skew(${skew.skewX}deg, ${skew.skewY}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div className="contactme_main" onMouseMove={handleMouseMove}>
        <div className="h-2 bg-blue-500"></div>
        <Navbar />
        <div className="animate-font-border">
          <div className="typing-container text-white text:2xl md:text-5xl lg:text-6xl">
            Lets Get In Touch
          </div>
        </div>
        <div className="flex flex-col lg:w-fit lg:flex-row gap-2 lg:gap-20 absolute contact_container text-white">
          <div className="p-5 contact_about leading-7 font-light">
            <h1 className="font-bold md:text-2xl lg:text-5xl  text-center font_deco">
              Let's Talk
            </h1>
            <div className="">
              <p className="my-3 sm:w-96 sm:mx-20 sm:text-xl w-64 lg:w-full lg:text-balance ">
                I'm currently available to take on new projects, so feel free to
                send me a message about anything that you want me to work on.
                You can contact me anytime.
              </p>
              <div className="w-72 lg:w-full leading-8 my-6 text-gray-400 sm:w-96 sm:mx-20">
                <p className="flex items-center gap-2 hover:scale-125">
                  {" "}
                  <IoMdMail /> <span>mathurharsh020@gmail.com</span>
                </p>
                <p className="flex items-center gap-2 hover:scale-125">
                  {" "}
                  <FaPhoneAlt /> <span>+91 9971676592</span>
                </p>
                <p className="flex items-center gap-2 hover:scale-125">
                  {" "}
                  <FaMapMarkerAlt /> <span> Delhi, India</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 leading-8 ">
            <form action="" className="p-4" onSubmit={handleformSubmit}>
              <label htmlFor="">Your Name: </label>
              <br />
              <input
                type="text"
                name="name"
                id=""
                className="placeholder:px-3"
                placeholder="Enter your name"
                onChange={(e)=>setname(e.target.value)}
              />
              <br />
              <label htmlFor="">Your Email:</label>
              <br />
              <input
                type="email"
                name="email"
                className=" placeholder:px-3"
                placeholder="Enter your Email"
                onChange={(e)=>setemail(e.target.value)}
              />
              <br />
              <label htmlFor="">Message:</label>
              <br />
              <textarea
                name="textarea"
                id=""
                className="h-36 placeholder:px-3"
                placeholder="Enter Message"
                onChange={(e)=>settextarea(e.target.value)}
              ></textarea>
              <input
                type="submit"
                value="SUBMIT"
                className="button my-3 mx-10 lg:my-0 lg:mx-0"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
