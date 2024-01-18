import React from "react";
import "../material_3_module/web/iconbutton/outlined-icon-button";
import "../material_3_module/web/icon/icon";

export default function DarkThemeSwitch({ darkMode, setDarkMode }) {
  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };
  return (
    <md-outlined-icon-button onClick={toggleTheme}>
      <md-icon>{darkMode ? "light_mode" : "dark_mode"}</md-icon>
    </md-outlined-icon-button>
  );
}
