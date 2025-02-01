import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="flex flex-center flex-col gap-xl">
      <h2 className="heading-1 color-primary-text">
        <span className="color-primary">Connect</span> with me
      </h2>

      <div class="flex flex-col flex-align-center w-4-5 gap-base">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/fastcentralhub.appspot.com/o/Amman_Soomro_Resume.pdf?alt=media&token=0eb046e5-b81d-4f48-a743-7de1918e51d0"
          download=""
        >
          <div class="app__footer-card border-radius-m flex flex-justify-start p-base flex-align-center gap-m bg-secondary-300">
            <img src={images.Resume} alt="mobile" />
            <span className="base-black content-accent">Download Resume</span>
          </div>
        </a>
        <a href="mailto:amman.soomro.as@gmail.com">
          <div class="app__footer-card border-radius-m flex flex-justify-start p-base flex-align-center gap-m bg-warning-300">
            <img src={images.Gmail} alt="email" />
            <span className="base-black content-accent">Email Me</span>
          </div>
        </a>
        <a href="https://api.whatsapp.com/send?phone=%2B923138501180&amp;text&amp;app_absent=0">
          <div class="app__footer-card border-radius-m flex flex-justify-start p-base flex-align-center gap-m bg-success-300">
            <img src={images.Whatsapp} alt="mobile" />
            <span className="base-black content-accent">Text Me</span>
          </div>
        </a>
      </div>
      <div className="content color-primary-text text-center">
        Copyright © {new Date().getFullYear()} | Crafted with 💛 by Amman Soomro
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, "flex full-width flex-col"),
  "contact",
  "bg-color-primary-bg"
);
