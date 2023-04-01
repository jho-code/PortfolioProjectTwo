import React, { useEffect, useState } from "react";

// import icons
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const DarkModel = () => {
  const [theme, setTheme] = useState("light");
  const [bg, setBg] = useState(false);

  // if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

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
        } p-4 rounded-full w-12 h-12 cursor-pointer absolute right-5 flex justify-center items-center transition-all duration-300 ease-in-out ${
          bg ? "-bottom-[50vh]" : "lg:-bottom-[85vh] -bottom-[75vh]"
        }`}
      >
        {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </div>
  );
};

export default DarkModel;
