/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import React from "react";
import style from "../styles/NavigationRail.module.css";
import color from "../styles/themes/colors.module.css";
import NavigationButton from "./NavigationButton";
import DarkThemeSwitch from "./DarkThemeSwtich";

export default function NavigationRail({ darkMode, setDarkMode }) {
  return (
    <div className={`${color.surfaceVariant} ${style.rail}`}>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />

      <div className={style.navigation}>
        <NavigationButton icon="home" name="Home" path="/" />
        <NavigationButton icon="info" name="About" path="/about" />
        <NavigationButton icon="assignment" name="Projects" path="/projects" />
        <NavigationButton icon="contact_mail" name="Contact" path="/contact" />
      </div>
      <DarkThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
