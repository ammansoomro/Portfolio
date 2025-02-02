import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filters, setFilters] = useState(["All"]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
      const uniqueTags = [
        ...new Set(data.map((item) => item.tags).flat()),
      ].filter((item) => item);
      setFilters(["All", ...uniqueTags]);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className="flex flex-col gap-xl">
      <h2 className="heading-1 color-primary-text">
        <span> Personal</span> <span className="color-primary">Projects</span>{" "}
      </h2>

      <div className="app__work-filter flex flex-wrap flex-center gap-m">
        {filters.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item border-radius-m px-base py-sm bg-neutral-100 color-primary-text  content-bold ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio flex flex-wrap flex-center gap-xl"
      >
        {filterWork.map((work, index) => (
          <div
            className="app__work-item flex flex-col border-radius-m p-base bg-neutral-100"
            key={index}
          >
            <div className="app__work-img flex flex-center">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
            </div>

            <div className="app__work-content full-width flex flex-col flex-center p-sm">
              <div className="flex flex-col gap-s">
                <div className="flex flex-justify-between flex-align-center  mt-sm">
                  <h4 className="feature-bold color-primary-text text-center">
                    {work.title}
                  </h4>
                  <div className="flex gap-m">
                    {work.projectLink && (
                      <a
                        href={work.projectLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiFillEye />
                      </a>
                    )}
                    {work.codeLink && (
                      <a href={work.codeLink} target="_blank" rel="noreferrer">
                        <AiFillGithub />
                      </a>
                    )}
                  </div>
                </div>
                <p className="content color-primary-text ">
                  {work.description}
                </p>
              </div>
              <div className="app__work-tag content-bold border-radius-m px-base py-sm bg-neutral-200 flex flex-center">
                <p className="content-bold color-primary-text">
                  {work.tags[0]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, "flex full-width flex-col"),
  "work",
  "bg-color-base-bg"
);
