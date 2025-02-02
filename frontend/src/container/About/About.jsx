import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const [experience, setExperience] = useState("1.6");

  useEffect(() => {
    const calculateExperience = (startYear, startMonth) => {
      const startDate = new Date(startYear, startMonth - 1); // Months are 0-indexed
      const currentDate = new Date();

      const years = currentDate.getFullYear() - startDate.getFullYear();
      const months = currentDate.getMonth() - startDate.getMonth();

      let exp = years + months / 12; // Convert months to decimal
      return exp.toFixed(1);
    };

    setExperience(calculateExperience(2023, 6));
  }, []);

  return (
    <div className="flex flex-col gap-base flex-center about-wrapper">
      <h2 className="color-primary-text heading-1">
        The <span className="color-primary">Engineer</span> Behind the Screen
      </h2>
      <div className="flex flex-col gap-m neutral-900 highlight about-container">
        <span>Hi, I'm Amman,</span>
        <span>
          A Software Engineer with{" "}
          <span className="color-primary-text highlight-accent text-underline">
            {experience} years of experience
          </span>{" "}
          in full-stack development. I enjoy building high-performance
          applications that make an impact.
        </span>
        <span>
          I graduated from FAST with a CGPA of{" "}
          <span className="color-primary-text highlight-accent">3.5</span> ,
          earning a place on the Dean's and Rector's List multiple times and
          securing{" "}
          <span className="color-primary-text highlight-accent">
            1st position
          </span>{" "}
          in one of my semesters
        </span>
        <span>
          Currently, I’m working at{" "}
          <a
            href="https://www.techlogix.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="color-primary-text highlight-accent text-underline"
          >
            Techlogix
          </a>{" "}
          on a large-scale digital banking application, where I develop critical
          modules while following best practices to optimize app performance for{" "}
          <span className="color-primary-text highlight-accent">
            millions of users.
          </span>{" "}
          Along the way, I focus on improving code quality and collaborating
          with my team to build efficient solutions.
        </span>
        <span>
          Outside of work, I love experimenting with new technologies, working
          on personal projects, and gaming on my PlayStation.
        </span>
        <span>Thanks for stopping by!</span>
        <span>Amman Soomro</span>
        <span>@ammansoomro</span>
        <div className="full-width flex flex-justify-end mr-xxl">
          <img
            src={isDarkMode ? images.sign_light : images.sign_dark}
            className="w-1-5"
            alt="Signature"
          />
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "flex full-width flex-col"),
  "about",
  "bg-color-base-bg"
);
