/* eslint-disable @next/next/no-img-element */
import React from "react";
import color from "../styles/themes/colors.module.css";
import typography from "../styles/themes/typography.module.css";
import style from "../styles/ProjectCard.module.css";

export default function Card({
  img = "",
  title = "",
  description = "",
  path = "",
}) {
  return (
    <a
      className={`${color.surfaceVariant} ${style.container}`}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={img} height={200} width="100%" alt="" className={style.image} />
      <div style={{ margin: "24px" }}>
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
