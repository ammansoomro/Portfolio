import React from "react";

const SECTIONS = ["home", "about", "work", "skills", "testimonial", "contact"];

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {SECTIONS.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="app__navigation-dot"
          style={active === section ? { backgroundColor: "#EDB10B" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
