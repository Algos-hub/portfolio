import React from "react";
import Contact from "@/components/Contact";
import color from "../styles/themes/colors.module.css";

export default function projects({ darkMode, setDarkMode }) {
  return (
    <Contact
      className={color.background}
      style={{ width: "100%" }}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}
