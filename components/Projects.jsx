import React, { useEffect } from "react";
import style from "../styles/Projects.module.css";
import typography from "../styles/themes/typography.module.css";
import color from "../styles/themes/colors.module.css";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import projects from "../data/projects";

export default function Project({ darkMode }) {
  const cards = projects.map((data, index) => {
    return (
      <ProjectCard
        key={index}
        img={data.img}
        title={data.title}
        description={data.description}
        path={data.path}
      />
    );
  });
  useEffect(() => {
    document.body.setAttribute("data-theme", "projects");
    document.querySelector("#__next").scrollTop = 0;
  }, []);
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ delay: 0.2, type: "linear" }}
    >
      <div className={style.main}>
        <div className={style.bannerContainer}>
          <div className={darkMode ? style.bannerDark : style.banner}>
            <h1 className={`${typography.displayLarge} ${color.textNeutral}`}>
              Projects
            </h1>
            <div
              className={`${typography.titleLarge} ${color.textNeutral} ${style.description}`}
            >
              {/* PLACEHOLDER TEXT CHANGE LATER */}Here you will find some of
              the personal that I created with each project containing its own
              case study
            </div>
          </div>
        </div>
        <div className={style.content}>
          <h1
            className={`${typography.displayMedium} ${color.textNeutral}`}
            style={{
              margin: "80px 0px 24px 24px",
            }}
          >
            Highlights
          </h1>
          <div className={style.highlights}>{cards}</div>
        </div>
      </div>
    </motion.main>
  );
}
