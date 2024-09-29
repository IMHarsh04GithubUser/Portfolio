// SkewContext
import React, { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

// Create the context
export const SkewContext = createContext();

// SkewProvider component
export const SkewProvider = ({ children }) => {
  const [skew, setSkew] = useState({ skewX: 1, skewY: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = currentTarget;

    // Calculate position relative to the element
    const x = clientX - offsetLeft;
    const y = clientY - offsetTop;

    // Normalize and scale skew
    const skewX = ((x / offsetWidth) * 2 - 1) * 5;
    const skewY = ((y / offsetHeight) * 2 - 1) * 5;

    setSkew({ skewX, skewY });
  };
  //POPUPFORM
  const [popup, setpopup] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setpopup(true); // Automatically show the popup
    }, 5000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [setpopup]);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [textarea, settextarea] = useState("");
  const handleformSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !textarea) {
      toast.error("Enter All Credentials😏");
      return;
    }
    axios
      .post("http://localhost:4001/connect", { name, email, textarea })
      .then((result) => {
        if (result.status === 201) {
          toast.success("Thank You For Connecting With Me! 😁");
        } else {
          toast.error("Did Not Get Data Please Check 🤧");
        }
      })
      .catch((error) => {
        console.log("Error", error);
        toast.error("Sorry Did Not Get Your Data Due To Some Problem😅");
      });
  };

  return (
    <SkewContext.Provider
      value={{
        skew,
        handleMouseMove,
        handleformSubmit,
        setname,
        setemail,
        settextarea,
        setpopup,
        popup
      }}
    >
      {children}
    </SkewContext.Provider>
  );
};
