import React from "react";
import style from "../styles/NavigationBar.module.css";
import color from "../styles/themes/colors.module.css";
import typography from "../styles/themes/typography.module.css";
import "../material_3_module/web/iconbutton/icon-button";
import "../material_3_module/web/icon/icon";
import "../material_3_module/web/button/text-button";
import Image from "next/image";
import { useRouter } from "next/router";
import NavigationDrawer from "./NavigationDrawer";

export default function NavigationBar({ darkMode, setDarkMode }) {
  const router = useRouter();
  const [drawerState, setDrawerState] = React.useState(false);
  function toggleDrawer() {
    setDrawerState(!drawerState);
  }
  return (
    <div className={`${style.nav} ${color.background}`}>
      <div className={style.buttons}>
        <md-icon-button onClick={() => setDrawerState(true)}>
          <md-icon>menu</md-icon>
        </md-icon-button>
        <NavigationDrawer
          toggleDrawer={toggleDrawer}
          drawerState={drawerState}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <md-text-button
          style={{
            marginLeft: "10px",
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            paddingInline: "10px",
          }}
          onClick={() => router.push("/")}
        >
          <div
            slot="icon"
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <Image
              src="/face-logo.png"
              width={30}
              height={30}
              style={{
                objectFit: "cover",
                borderRadius: "50px",
                border: "2px solid var(--md-sys-color-primary)",
              }}
              alt="Hello this is what my face looks like in very small"
            />
          </div>
          <h2
            className={`${typography.bodyMedium} ${color.textNeutral} ${style.name}`}
          >
            Pedro Moraes
          </h2>
        </md-text-button>
      </div>
    </div>
  );
}
