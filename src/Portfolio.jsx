import AboutMe from "./components/AboutMe/AboutMe";
import Homepage_Portfolio from "./components/Homepage/HomePage";
import MyProjects from "./components/Projects/MyProjects";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ContactMe from "./components/Contact/ContactMe";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Portfolio = () => {
  return (
    <>
    <BrowserRouter>
    <ToastContainer />
        <Routes>
            <Route element={<Homepage_Portfolio/>} path="/" />
            <Route element={<AboutMe/> } path="/about"></Route>
            <Route element={<ContactMe/> } path="/contact"/>
            <Route element={<MyProjects/>} path="/projects"/>
        </Routes>
    </BrowserRouter>
      
      
      
    </>
  );
};

export default Portfolio;
