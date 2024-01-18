import * as React from "react";
import "../material_3_module/web/icon/icon";
import "../material_3_module/web/button/outlined-button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DrawerButton from "./DrawerButton";

export default function NavigationDrawer(props) {
  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    } else {
      localStorage.setItem("theme", "dark");
    }
    props.setDarkMode(!props.darkMode);
  };

  function closeDrawer() {
    props.toggleDrawer();
  }
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    closeDrawer();
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 320,
        height: 1,
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, props.drawerState)}
      onKeyDown={toggleDrawer(anchor, props.drawerState)}
    >
      <md-icon-button
        style={{ margin: "8px 0 8px 12px", height: 48, width: 48 }}
      >
        <md-icon>menu_open</md-icon>
      </md-icon-button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <DrawerButton icon="home" name="Home" path="/" />
        <DrawerButton icon="info" name="About" path="/about" />
        <DrawerButton icon="assignment" name="Projects" path="/projects" />
        <DrawerButton icon="contact_mail" name="Contact" path="/contact" />
      </div>
      <div
        style={{
          height: "max-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flex: 1,
          marginBottom: 12,
        }}
      >
        <md-outlined-button toggle onClick={toggleTheme}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingInline: 20,
              height: 48,
            }}
          >
            <md-icon style={{ marginRight: 10 }}>
              {props.darkMode ? "light_mode" : "dark_mode"}
            </md-icon>
            Switch to {props.darkMode ? "light" : "dark"} mode
          </div>
        </md-outlined-button>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Drawer
          PaperProps={{
            style: {
              width: 320,
              backgroundColor: "var(--md-sys-color-surface-variant)",
              borderRadius: "0px 16px 16px 0px",
            },
          }}
          anchor="left"
          open={props.drawerState}
          onClose={toggleDrawer("left", props.drawerState)}
          style={{ zIndex: "999999" }}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
