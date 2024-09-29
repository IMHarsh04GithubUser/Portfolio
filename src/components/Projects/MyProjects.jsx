import "./MyProjects.css";
import Navbar from "../Navbar/Navbar";
import { Cards } from "./Project_Cards";
import Photo from "../../assets/Anime_Photo.png"
import { useContext } from "react";
import { SkewContext } from "../StoreContext/ContextProvider";
const MyProjects = () => {
    const {skew,handleMouseMove} = useContext(SkewContext)
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
      <div className="" onMouseMove={handleMouseMove}>
        <Navbar />
        <div className="typing-container-projects text-red-400 text:2xl md:text-5xl lg:text-7xl">
          My Projects
        </div>
        <div className="mx-10 my-5 md:mx-20 lg:mx-20">
            <div className="">
                <Cards/>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default MyProjects;
