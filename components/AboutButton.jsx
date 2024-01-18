/* eslint-disable @next/next/no-img-element */
import React from "react";
import color from "../styles/themes/colors.module.css";
import typography from "../styles/themes/typography.module.css";
import style from "../styles/AboutButton.module.css";
import { useRouter } from "next/router";

export default function Card({ title = "", description = "", path = "" }) {
  const router = useRouter();
  return (
    <a
      className={`${color.surfaceVariant} ${style.container}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        path.startsWith("http") || path.startsWith("/CV")
          ? window.open(path, "_blank").focus()
          : router.push(path);
      }}
    >
      <div style={{ margin: "24px", width: "100%" }}>
        <h2
          className={`${typography.headlineSmall} ${color.textNeutral}`}
          style={{ marginBottom: 20 }}
        >
          {title}
        </h2>
        <div className={`${typography.bodyLarge} ${color.textNeutral}`}>
          {description}
        </div>
      </div>
    </a>
  );
}
