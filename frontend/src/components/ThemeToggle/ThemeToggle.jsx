import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    toggleTheme();
  };

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
