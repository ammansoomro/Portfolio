import React from "react";
import ThemeToggle from "../ThemeToggle";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        A<span>.</span>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
