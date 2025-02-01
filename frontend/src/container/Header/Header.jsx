import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header flex flex-center w-full">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info text-center flex-center"
      >
        <div className="heading-3 color-primary-text">Amman Soomro</div>
        <div className="feature-bold color-primary-text">
          Software Engineer <span className="color-primary">|</span> Full Stack
          Developer
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home", "bg-color-primary-bg");
