import React, { useEffect, useState } from "react";

// import icons
import { BsFillMoonFill, BsFillSunFill, BsCheck } from "react-icons/bs";

const DarkModel = () => {
  const [theme, setTheme] = useState("light");

  // if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  // handle switch theme
  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="h-screen">
      <button
        onClick={handleThemeSwitch}
        className={`${
          theme === "light" ? "bg-primary text-white" : "bg-white text-primary "
        } p-4 rounded-full w-12 h-12 cursor-pointer absolute right-5 -bottom-[83vh] flex justify-center items-center transition-all duration-500 ease-in-out`}
      >
        {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </div>
  );
};

export default DarkModel;
