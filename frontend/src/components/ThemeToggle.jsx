import React, { useState, useEffect } from "react";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="toggle-theme-container">
      <input
      className="toggle-theme-switch"
        type="checkbox"
        id="toggle"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label className="toggle-theme-icon" htmlFor="toggle"></label>
    </div>
  );
};

export default ThemeToggle;
