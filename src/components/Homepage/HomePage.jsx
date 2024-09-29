import Photo from "../../assets/Anime_Photo.png";
import Navbar from "../Navbar/Navbar";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import "./Homepage.css";
import { useContext } from "react";
import { SkewContext } from "../StoreContext/ContextProvider";


const Homepage_Portfolio = () => {
  const { skew, handleMouseMove,setpopup } = useContext(SkewContext);

  return (
    <>
      <Navbar />      
        <div
          className="Homepage_container Intro_Container flex flex-col md:flex-row items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-40 gap-6"
          onMouseMove={handleMouseMove} id="Homepage"
        >
          <div className="Intro_Text font-bold">
            <p className="text-white text-md">Hi I am</p>
            <p className="text-orange-500 text-lg typing-container-home">Harsh Mathur</p>
            <p className="text-white text-6xl">Web Developer</p>
            <br />
            <p className="leading-6 text-white font-light">
              Dedicated and highly motivated individual seeking an entry-level
              position in Web Development, eager to leverage academic
              background, analytical skills, and a strong understanding to
              contribute to the development of websites. Eager to apply skills
              to solve complex problems. A quick learner, adaptable, and capable
              of working both independently and in teams.
            </p>
            <div className=" bg-orange-400 text-white font-medium w-24 px-4 py-3 rounded-lg mt-2" id="HireMe">
              HIRE ME
            </div>
          </div>
          <div
            className="Profile_Image"
            style={{
              transform: `skew(${skew.skewX}deg, ${skew.skewY}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src={Photo}
              alt="Profile_Pic"
              className="hover:skew-x-12 rounded-2xl my-10"
              id="Profile_Img"
            />
          </div>
          
        </div>
        
        <div className="Icon_Container w-fit mx-3 my-44 flex flex-col gap-4">
          <a href="https://www.instagram.com/harsh_mathur1704/" target="_blank">
            <FaInstagram id="Insta_Icon" />
          </a>
          <a href="https://www.linkedin.com/in/harsh-mathur-8752ab256/" target="_blank">
            <FaLinkedin id="Linkedin_Icon" />
          </a>
          <a href="">
            <FaTwitter id="Twitter_Icon" />
          </a>
          
        </div>
        <div className="">{setpopup}</div>
        
  
      
    </>
  );
};

export default Homepage_Portfolio;
