import React from "react";
import Projects from "@/components/Projects";
import color from "../styles/themes/colors.module.css";

export default function projects({ darkMode, setDarkMode }) {
  return (
    <Projects
      className={color.background}
      style={{ width: "100%" }}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}
