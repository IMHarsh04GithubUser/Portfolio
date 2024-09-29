import "./Homepage.css";
import { IoCloseCircle } from "react-icons/io5";
import { useContext } from "react";
import { SkewContext } from "../StoreContext/ContextProvider";
const Contact_Popup = () => {
    const {popup } = useContext(SkewContext);
  return (
   
    <>
    {popup&&(<div className="w-fit form_popup" onClick={popupform}>
    <form className="form">
        <h1 className="text-white text-2xl text-center font-bold">Want To Contact</h1>
        <IoCloseCircle className="relative left-full bottom-14 hover:text-white"/>
        <input placeholder="Enter your name" className="input" type="text" />
        <input placeholder="Enter your email" className="input" type="text" />
        <textarea name="" id="" className="input"></textarea>

        <button className="btn_popup">Submit</button>
      </form>
    </div>)}
     
    </>
  );
};

export default Contact_Popup;
