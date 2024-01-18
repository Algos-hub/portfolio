import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import NavigationRail from "@/components/NavigationRail";
import Footer from "@/components/Footer";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import NavigationBar from "@/components/NavigationBar";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  // check and reset theme when `darkMode` changes
  useEffect(() => {
    themeCheck();
  }, [darkMode]);

  // check theme on component mount
  useEffect(() => {
    themeCheck();
  }, []);

  // check and reset theme
  const themeCheck = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark");
      setDarkMode(true);
    } else {
      document.body.classList.remove("dark");
      setDarkMode(false);
    }
  };
  return (
    <>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <NavigationRail darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer />
    </>
  );
}
