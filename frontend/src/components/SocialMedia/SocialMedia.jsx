import React from "react";
import "./SocialMedia.scss";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const socialLinks = [
  { href: "https://github.com/ammansoomro", icon: <BsGithub /> },
  { href: "https://www.linkedin.com/in/ammansoomro/", icon: <BsLinkedin /> },
  { href: "https://www.instagram.com/ammansoomro", icon: <BsInstagram /> },
];

const SocialMedia = () => (
  <div className="app__social">
    {socialLinks.map(({ href, icon }, index) => (
      <a key={index} href={href} target="_blank" rel="noopener noreferrer">
        <div className="bg-neutral-200 flex-center">{icon}</div>
      </a>
    ))}
  </div>
);

export default SocialMedia;
