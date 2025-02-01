import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "react-tippy/dist/tippy.css";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="heading-1 color-primary-text">
        What I Bring to the <span className="color-primary">Table</span>
      </h2>

      <div className="app__skills-container ">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item  app__flex"
              key={skill.name}
            >
              <div className="flex flex-center bg-neutral-200">
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="content color-primary-text">{skill.name}</p>
            </motion.div>
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
