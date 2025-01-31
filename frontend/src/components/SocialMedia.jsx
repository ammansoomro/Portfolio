import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/ammansoomro/" target="#">
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href="https://github.com/ammansoomro" target="#">
      <div>
        <BsGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
