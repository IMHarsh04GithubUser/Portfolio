import "./AboutMe.css";
import Navbar from "../Navbar/Navbar";
import Photo from "../../assets/Anime_Photo.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { useContext } from "react";
import { SkewContext } from "../StoreContext/ContextProvider";
import { SocialIcon } from "react-social-icons/component";

const AboutMe = () => {
  const { skew, handleMouseMove } = useContext(SkewContext);

  return (
    <>
     
      <div
        className="w-full bg-gray-900"
        id="About"
        onMouseMove={handleMouseMove}
      >
        <div className="h-2 bg-red-500"></div>

        <Navbar />

        <div className="aboutme_content flex flex-col lg:flex-row gap-8 lg:gap-24 mx-5 lg:mx-10">
          <div className="my_intro_skills p-6 lg:p-10 flex flex-col gap-6">
            <div className="my_intro p-4 flex flex-col md:flex-row gap-4 items-center">
              {/* Image */}
              <img
                src={Photo}
                alt="Photo"
                className="rounded-full h-32 w-32 md:h-40 md:w-40 border-red-700 shadow-cyan-400 shadow-2xl"
                id="photo_about"
                style={{
                  transform: `skew(${skew.skewX * 5}deg, ${skew.skewY * 5}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              />

              <div className="intro text-yellow-100 font-medium leading-7 text-center md:text-left">
                <p>Name: Harsh Mathur</p>
                <p>Role: MERN Stack Developer</p>
                <p>Experience: 6 months</p>
                <p>Location: Delhi, India</p>
              </div>
            </div>

            <div className="my_skills p-4 text-white font-light">
              <h1 className="font-bold text-cyan-400">SKILLS</h1>

              <label htmlFor="">MYSQL</label>
              <ProgressBar
                completed={50}
                bgColor="red"
                borderRadius="20px"
                baseBgColor="rgb(8, 27, 41)"
                animateOnRender
              />
              <label htmlFor="">JAVA</label>
              <ProgressBar
                completed={60}
                bgColor="blue"
                borderRadius="20px"
                baseBgColor="rgb(8, 27, 41)"
                animateOnRender
              />
              <label htmlFor="">MERN Stack Development</label>
              <ProgressBar
                completed={80}
                bgColor="green"
                borderRadius="20px"
                baseBgColor="rgb(8, 27, 41)"
                animateOnRender
              />
              <label htmlFor="">PowerBI</label>
              <ProgressBar
                completed={90}
                bgColor="cyan"
                borderRadius="20px"
                baseBgColor="rgb(8, 27, 41)"
                animateOnRender
              />
            </div>
          </div>

          <div className="my_intro_content p-4 flex flex-col gap-6 lg:w-1/2">
            <div className="content_intro p-3">
              <h1 className="typing-container-home font-extrabold text-3xl lg:text-5xl text-white font_raleway_Protest text-center underline">
                About Me
              </h1>
              <p className="text-cyan-500 my-6 text-sm md:text-base lg:text-lg">
                I am a passionate MERN stack developer with 6 months of hands-on
                experience building full-stack web applications. My expertise
                includes creating and deploying projects using MongoDB, Express,
                React, and Node.js. I have successfully completed a MERN stack
                project, honing my skills in both frontend and backend
                development. I'm always eager to learn new technologies and
                improve my coding practices to deliver scalable and efficient
                solutions.
              </p>
            </div>

            <div className="profile text-white flex flex-row md:flex-row gap-6 p-3 leading-7 text-sm lg:text-xl md:text-xl">
              <div className="font-bold">
                <p>Profile:</p>
                <p>Domain:</p>
                <p>Education:</p>
                <p>Language:</p>
                <p>BI Tools:</p>
                <p>Interest:</p>
              </div>
              <div className="font-light text-gray-400">
                <p>Web Developer and Data Analyst</p>
                <p>MERN Stack, UI/UX</p>
                <p>BCA</p>
                <p>Hindi, English</p>
                <p>PowerBI</p>
                <p>Travelling, Drawing, Gaming</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
          <SocialIcon
            network="linkedin"
            href="https://www.linkedin.com/in/harsh-mathur-8752ab256/"
            className="icon-linkedin animate-bounce"
            target="_blank"
          />
        </div>
        </div>

        
      </div>
    </>
  );
};

export default AboutMe;
