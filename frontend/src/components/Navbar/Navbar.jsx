import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar w-full flex flex-align-center flex-justify-between">
      <div className="heading-2 color-primary-text">
        A<span className="color-primary">.</span>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
