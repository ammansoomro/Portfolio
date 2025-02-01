import React from "react";
import "./SocialMedia.scss";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/ammansoomro" target="#">
      <div className="bg-neutral-200 flex-center">
        <BsGithub />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/ammansoomro/" target="#">
      <div className="bg-neutral-200 flex-center">
        <BsLinkedin />
      </div>
    </a>
    <a href="https://www.instagram.com/ammansoomro" target="#">
      <div className="bg-neutral-200 flex-center">
        <BsInstagram />
      </div>
    </a>
  </div>
);

export default SocialMedia;
