import React, { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-schema:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handelThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button className="bg-black dark:bg-white" onClick={handelThemeChange}>
        Dark Mode
      </button>
    </>
  );
};

export default Theme;
