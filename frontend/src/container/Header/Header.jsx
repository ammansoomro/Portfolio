import React from "react";
import { motion } from "framer-motion";
import SocialMediaIcon from "../../components/SocialMedia/SocialMedia";
import Shapes from "../../components/Shapes/Shapes";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className=" flex flex-center ">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex-col text-center flex-center gap-s"
        >
          <div className="heading-3 color-primary-text">Amman Soomro</div>
          <div className="feature-bold color-primary-text">
            Software Engineer <span className="color-primary">|</span> Full
            Stack Developer
          </div>
          <div className="w-5-6 content color-primary-text neutral-800">
            Developing innovative solutions with clean, well-structured code.
          </div>
          <SocialMediaIcon />
        </motion.div>
      </div>
      <Shapes />
    </>
  );
};

export default AppWrap(Header, "home", "bg-color-primary-bg");
