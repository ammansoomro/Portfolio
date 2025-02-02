import React from "react";
import { motion } from "framer-motion";
import "react-tippy/dist/tippy.css";
import { FaJava, FaReact, FaNode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { TbCodeDots } from "react-icons/tb";
import {
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiGit,
  SiExpress,
  SiTailwindcss,
  SiSanity,
} from "react-icons/si";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

// Reusable SkillItem component
const SkillItem = ({ icon: Icon, skillName }) => (
  <div className="app__skills-item flex flex-center">
    <div className="flex flex-center bg-neutral-200">
      <Icon />
    </div>
    <p className="content color-primary-text">{skillName}</p>
  </div>
);

const Skills = () => {
  // Skills data array
  const skills = [
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaReact, name: "React" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: FaNode, name: "Node" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiExpress, name: "Express" },
    { icon: TbCodeDots, name: "Clean Code" },
    { icon: FaJava, name: "Java" },
    { icon: DiMysql, name: "MySQL" },
    { icon: SiPython, name: "Python" },
    { icon: SiGit, name: "Git" },
    { icon: SiSanity, name: "Sanity" },
  ];

  return (
    <>
      <h2 className="heading-1 color-primary-text">
        What I Bring to the <span className="color-primary">Table</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <SkillItem key={index} icon={skill.icon} skillName={skill.name} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "flex full-width flex-col"),
  "skills",
  "bg-color-primary-bg"
);
