import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  const works = [
    {
      codeLink: "https://github.com/ammansoomro/ShadowSensei",
      description:
        "A web-based, Student Management System built using HTML, CSS, PHP, and JavaScript that would store all the data about the students and their courses on a PHP MySQL server.",
      imgUrl: "",
      projectLink:
        "https://k191048localweb.000webhostapp.com/NinjaDBMS/index.php",
      tags: ["Php"],
      title: "Shadow Sensei",
    },
    {
      codeLink: "https://github.com/ammansoomro/GradeCalc",
      description:
        "A web app developed with HTML, CSS, and JavaScript. Effortlessly compute semester and cumulative GPAs by inputting course grades. Empowering users to track their academic progress with ease.",
      imgUrl: "",
      tags: ["HTML"],
      title: "Grade Calc",
    },
    {
      codeLink: "https://github.com/ammansoomro/Moviebase",
      description:
        "This project is a YTS clone built using React and its libraries, and it's populated using YTS official API. It provides users with an interface that allows them to browse, search and download movies torrents from YTS website.",
      imgUrl: "",
      projectLink: "https://moviebase-yts.netlify.app/",
      tags: ["React"],
      title: "Moviebase",
    },
    {
      codeLink: "https://github.com/ammansoomro/SportsHub",
      description:
        "Your go-to React Native app for cricket and golf updates. Experience live scores, schedules, and game insights through a user-friendly interface, keeping you engaged and informed.",
      imgUrl: "",
      tags: ["Native", "React"],
      title: "Sports Hub",
    },
    {
      codeLink: "https://github.com/ammansoomro/WordSearchWizard",
      description:
        "A Python-based project featuring a script to unravel word search puzzles. Input a puzzle and a word list, and witness the script pinpoint word positions. Experience a vibrant puzzle display with highlighted found words.",
      imgUrl: "",
      tags: ["Python"],
      title: "Word Search Wizard",
    },
    {
      codeLink: "https://github.com/ammansoomro/SwiftReserve",
      description:
        "A cutting-edge Windows application for Hotel Reservations, crafted with Java. Leveraging Java, Swing, and JFrame, it revolutionizes booking with automation, bidding adieu to manual room reservation processes.",
      imgUrl: "",
      tags: ["Java"],
      title: "Swift Reserve",
      _updatedAt: "2025-02-01T14:53:22Z",
    },
    {
      codeLink: "https://github.com/ammansoomro/ScrollSnap",
      description:
        "A sleek webpage crafted in HTML and CSS, featuring a dynamic lazy-loading user data container. Enhanced by CSS animations and scroll-snap, offering users an engaging, seamless browsing journey.",
      imgUrl: "",
      tags: ["HTML"],
      title: "Scroll Snap",
    },
    {
      codeLink: "https://github.com/ammansoomro/LavenderLogs",
      description:
        "A web-based, Blog Post Management System developed using Php, HTML, and JS including MySQL Database as a backend to store all the data. The consists of different dashboards based on user-role.",
      imgUrl: "",
      projectLink: "http://darktestsite007.000webhostapp.com/",
      tags: ["Php"],
      title: "Lavender Logs",
    },
    {
      codeLink: "https://github.com/ammansoomro/SMD_Project",
      description:
        "React Native app featuring user authentication, displaying a variety of PlayStation accessories and games. Users can browse, add items to a mock shopping cart, and simulate a purchase experience.",
      imgUrl: "",
      tags: ["Native", "React"],
      title: "GameWares Hub",
    },
    {
      codeLink: "https://github.com/ammansoomro/prompt-o-phobia",
      description:
        "Empower your creativity using Next.js. Shape unique prompts for advanced AI interaction, revolutionizing AI-driven experiences. Your innovation knows no bounds with this platform. Share and redefine possibilities today!",
      imgUrl: "",
      projectLink: "https://prompt-o-phobia.vercel.app/",
      tags: ["Next"],
      title: "Prompt-O-Phobia",
    },
  ];

  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filters, setFilters] = useState(["All"]);

  useEffect(() => {
    const uniqueTags = [
      ...new Set(works.map((item) => item.tags).flat()),
    ].filter((item) => item);
    setFilters(["All", ...uniqueTags]);
  }, [works]);

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
        <span> Side</span> <span className="color-primary">Quests</span>{" "}
      </h2>

      <div className="app__work-filter flex flex-wrap flex-center gap-m">
        {filters.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item border-radius-m px-base py-sm bg-neutral-100 color-primary-text content-bold ${
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
              <img src={work.imgUrl} alt={work.name} />
            </div>

            <div className="app__work-content full-width flex flex-col flex-center p-sm">
              <div className="flex flex-col gap-s">
                <div className="flex flex-justify-between flex-align-center mt-sm">
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
                <p className="content color-primary-text">{work.description}</p>
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
