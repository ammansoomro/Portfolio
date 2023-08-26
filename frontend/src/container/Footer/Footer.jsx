import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">
        <span>Connect</span> with me
      </h2>

      <div class="app__footer-cards">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/fastcentralhub.appspot.com/o/Amman_Soomro_Resume.pdf?alt=media&token=0eb046e5-b81d-4f48-a743-7de1918e51d0"
          class="p-text"
          download=""
        >
          <div class="app__footer-card yellow">
            <img src={images.Resume} alt="mobile" />
            Download Resume
          </div>
        </a>
        <a href="mailto:amman.soomro.as@gmail.com" class="p-text">
          <div class="app__footer-card red">
            <img src={images.Gmail} alt="email" />Email Me
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=%2B923138501180&amp;text&amp;app_absent=0"
          class="p-text"
        >
          <div class="app__footer-card green">
            <img src={images.Whatsapp} alt="mobile" />
            Text Me
          </div>
        </a>
      </div>
      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )} */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
