import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text color-primary-text">
        <span className="color-primary">Connect</span> with me
      </h2>

      <div class="app__footer-cards">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/fastcentralhub.appspot.com/o/Amman_Soomro_Resume.pdf?alt=media&token=0eb046e5-b81d-4f48-a743-7de1918e51d0"
          class="p-text"
          download=""
        >
          <div class="app__footer-card bg-secondary-300">
            <img src={images.Resume} alt="mobile" />
            <span className="neutral-1000 content-accent">Download Resume</span>
          </div>
        </a>
        <a href="mailto:amman.soomro.as@gmail.com" class="p-text">
          <div class="app__footer-card bg-warning-300">
            <img src={images.Gmail} alt="email" />
            <span className="neutral-1000 content-accent">Email Me</span>
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=%2B923138501180&amp;text&amp;app_absent=0"
          class="p-text"
        >
          <div class="app__footer-card bg-success-300">
            <img src={images.Whatsapp} alt="mobile" />
            <span className="neutral-1000 content-accent">Text Me</span>
          </div>
        </a>
      </div>
      <div className="content color-primary-text">
        Copyright © {new Date().getFullYear()} | Crafted with 💛 by Amman Soomro
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "bg-color-primary-bg"
);
