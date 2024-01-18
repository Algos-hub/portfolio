import React from "react";
import About from "@/components/About";
import color from "../styles/themes/colors.module.css";

export default function index({ darkMode, setDarkMode }) {
  return (
    <About
      className={color.background}
      style={{ width: "100%" }}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}
