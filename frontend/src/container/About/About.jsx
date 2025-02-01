import React from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  return (
    <>
      <h2 className="color-primary-text heading-1">
        I Know that <span className="color-primary">Good Design</span> <br />
        means <span className="color-primary">Good Business</span>
      </h2>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "flex full-width flex-col"),
  "about",
  "bg-color-base-bg"
);
