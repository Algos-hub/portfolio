/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import "../material_3_module/web/divider/divider.js";
import style from "../styles/About.module.css";
import typography from "../styles/themes/typography.module.css";
import color from "../styles/themes/colors.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "@/data/skillsIcons";
import AboutButton from "./AboutButton";

import { motion } from "framer-motion";

export default function About({ darkMode }) {
  useEffect(() => {
    document.body.setAttribute("data-theme", "about");
    document.querySelector("#__next").scrollTop = 0;
  }, []);

  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const skills = icons.map((data, index) => (
    <div
      className={color.onPrimary}
      key={index}
      style={{
        borderRadius: 15,
        width: 85,
        margin: 10,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={data.icon} style={{ height: 25 }} />
      <div>{data.name}</div>
    </div>
  ));
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ delay: 0.2, type: "linear" }}
    >
      <div className={style.main} style={{ height: "100%" }}>
        <div className={style.bannerContainer}>
          <div className={darkMode ? style.bannerDark : style.banner}>
            <h1 className={`${typography.displayLarge} ${color.textNeutral}`}>
              About me
            </h1>
            <div
              className={`${typography.titleLarge} ${color.textNeutral} ${style.description}`}
            >
              {/* PLACEHOLDER TEXT CHANGE LATER */}Here you will find more
              information about me, what I do, and my current skills mostly in
              terms of programming and technology
            </div>
          </div>
        </div>
        <div className={style.info}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1
              className={`${typography.displayMedium} ${color.textNeutral}`}
              style={{ margin: "200px 0px 24px 24px" }}
            >
              Who am I?
            </h1>
            <div
              style={{
                padding: 20,
                maxWidth: 640,
                width: "100%",
              }}
              className={`${typography.bodyLarge} ${color.textNeutral}`}
            >
              <div style={{ marginBottom: 20 }}>
                I&#39;m a Web Developer building Websites and Web Applications
                that leads to the success of the overall product.
              </div>
              <div style={{ marginBottom: 20 }}>
                I also like sharing content related to the stuff that I have
                learned over time in Web Development so it can help other people
                of the Dev Community.
              </div>
              <div style={{ marginBottom: 10 }}>
                I&#39;m open to Job opportunities where I can contribute, learn
                and grow. If you have a good opportunity that matches my skills
                and experience then don&#39;t hesitate to contact me.
              </div>
            </div>

            <AboutButton
              title="Skills"
              description={
                <div>
                  <div className={style.skills}>{skills}</div>
                  <div>
                    Feel free to check out some of my work in the Projects
                    section.
                  </div>
                </div>
              }
              path="/projects"
            />
            <AboutButton
              title="Connect"
              description="Feel free to Connect or Follow me on my
              Linkedin."
              path="/contact"
            />
            <AboutButton
              title="Resume"
              description="You can check my full resume here."
              path="/CV_Pedro_Moraes_Fontes.pdf"
            />
          </div>
          <md-divider style={{ margin: "100px 0 100px 0", width: "40%" }} />
        </div>

        <div className={style.imgContainer}>
          <div className={style.img}>
            <img
              src="/Pedro_full.jpg"
              width="100%"
              alt="Hello this is what I look like"
              style={{ objectFit: "cover", height: "100%", borderRadius: 25 }}
            />
          </div>
        </div>
      </div>
    </motion.main>
  );
}
