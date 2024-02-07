import React, { useEffect } from "react";
import "../material_3_module/web/button/filled-button.js";
import style from "../styles/Home.module.css";
import typography from "../styles/themes/typography.module.css";
import color from "../styles/themes/colors.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import HomeCard from "./HomeCard";

export default function Home({ darkMode }) {
  const router = useRouter();
  useEffect(() => {
    document.body.setAttribute("data-theme", "home");
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
              Hey, I&#39;m Pedro Moraes
            </h1>
            <div
              className={`${typography.titleLarge} ${color.textNeutral} ${style.description}`}
            >
              {/* PLACEHOLDER TEXT CHANGE LATER */}A Full-Stack Web Developer
              building Websites and Web Applications that leads to the success
              of the overall product.
            </div>
            <md-filled-button onClick={() => router.push("/projects")}>
              <div className={`${typography.headlineSmall} ${style.projects}`}>
                Projects
              </div>
            </md-filled-button>
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
          <div className={style.highlights}>
            <HomeCard
              img="/highlight_5.png"
              title="Latest project"
              description="An updated version of my first pokedex, made using NextJs, indexing the all 1025 pokemon, with more features."
              path="https://repokedex.vercel.app/"
            />
            <HomeCard
              img="/Pedro.jpg"
              title="About me"
              description="Get to know me and my skills!"
              path="/about"
            />
          </div>
        </div>
      </div>
    </motion.main>
  );
}
