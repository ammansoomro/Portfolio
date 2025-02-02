import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { GiDiamonds } from "react-icons/gi";
import "./Experience.scss";

const TimelineEntry = ({ companyName, descriptions }) => (
  <div className="entry">
    <div className="flex flex-align-center mb-base">
      <div className="dot bg-color-primary"></div>
      <div className="feature-accent color-primary-text">{companyName}</div>
    </div>
    <div className="description flex flex-col gap-sm">
      {descriptions.map((desc, index) => (
        <div className="flex flex-justify-center gap-s">
          <span>
            <GiDiamonds />
          </span>
          <span className="highlight neutral-1000" key={index}>
            {desc}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      companyName: "Software Engineer x Techlogix ",
      descriptions: [
        "Built and enhanced a large-scale digital banking application, utilizing ReactJS, KnockoutJS, JavaScript, Java, Jenkins, and Oracle SQL to deliver a seamless experience for over 2 million users.",
        "Played a key role in developing critical modules such as Fund Transfer, Bill Payments, Mobile Top-ups, AMIM, RAAST, and Payoneer, contributing to revenue growth in the thousands for the company.",
        "Proactively refactored critical modules, optimizing code structure, enforcing best practices, and introducing reusable components. This significantly reduced bugs, cut debugging time by 80%, and improved both user experience and long-term scalability.",
        "Designed and developed key UI components while contributing to the implementation of a frontend design system with SCSS and mixins. This streamlined theme management, cut UI creation time by more than 50%, and ensured a consistent look and feel across the application.",
        "Led the development of a large-scale digital account opening application, mentoring two junior developers and leveraging ReactJS, JavaScript, and Clean Architecture. Focused on efficient data state management to ensure smooth performance and scalability.",
        "Authored comprehensive documentation outlining coding standards, team workflows, and best practices, which simplified the onboarding process, cut training time by 70%, and significantly improved team productivity.",
        "Developed batch scripts to automate the creation of components and UI elements, generating the necessary SQL scripts and template code. This automation streamlined the development process, reducing development time for the team. Additionally, created other batch scripts tailored to the team's specific needs.",
        "Received 'Achiever of the Month' recognition for excelling in onsite development while being part of a resource augmentation project, delivering seamless on-site support and effective solutions.",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-base">
      <h2 className="color-primary-text heading-1">
        The <span className="color-primary">Road</span> So Far
      </h2>
      <div className="timeline p-base flex flex-col gap-base">
        {experiences.map((entry, index) => (
          <TimelineEntry
            key={index}
            companyName={entry.companyName}
            descriptions={entry.descriptions}
            isPrimary={entry.isPrimary}
          />
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Experience, "flex full-width flex-col"),
  "experience",
  "bg-color-base-bg"
);
