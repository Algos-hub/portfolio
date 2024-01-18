import React from "react";
import Home from "@/components/Home";
import color from "../styles/themes/colors.module.css";

export default function index({ darkMode, setDarkMode }) {
  return (
    <Home
      className={color.background}
      style={{ width: "100%" }}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}
