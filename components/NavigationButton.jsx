import React from "react";
import "../material_3_module/web/iconbutton/filled-tonal-icon-button";
import "../material_3_module/web/iconbutton/filled-icon-button";
import "../material_3_module/web/icon/icon";
import typography from "../styles/themes/typography.module.css";
import color from "../styles/themes/colors.module.css";
import style from "../styles/NavigationButton.module.css";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function NavigationButton({ icon = "", name = "", path = "" }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={style.container}
      onClick={() => {
        router.push(path);
      }}
    >
      <motion.div
        className={style.filled}
        initial={{
          opacity: 1,
        }}
        animate={
          pathname === path
            ? { opacity: 1, scaleX: 1, scaleY: 1 }
            : { opacity: 1, scaleX: 0, scaleY: 1 }
        }
        transition={{
          duration: 0.2,
        }}
      >
        <md-filled-icon-button
          style={{ width: "56px", height: "31px" }}
          onClick={() => {
            router.push(path);
          }}
        ></md-filled-icon-button>
      </motion.div>
      <div className={style.filled}>
        <md-filled-tonal-icon-button
          style={{ width: "56px", height: "31px" }}
          onClick={() => {
            router.push(path);
          }}
        >
          {pathname === path ? (
            <md-icon filled>{icon}</md-icon>
          ) : (
            <md-icon>{icon}</md-icon>
          )}
        </md-filled-tonal-icon-button>
      </div>
      <p
        className={`${typography.labelMedium} ${color.onSurfaceVariantText}`}
        style={{ marginTop: "5px", textAlign: "center" }}
        onClick={() => {
          router.push(path);
        }}
      >
        {name}
      </p>
    </div>
  );
}
