import React from "react";
import "../material_3_module/web/divider/divider";
import "../material_3_module/web/iconbutton/icon-button";
import typography from "../styles/themes/typography.module.css";
import color from "../styles/themes/colors.module.css";
import style from "../styles/Footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <div className={style.footer}>
      <md-divider />
      <div className={style.items}>
        <div className={style.container}>
          <div className={style.me}>
            <Image
              src="/face-logo.png"
              width={75}
              height={75}
              style={{
                objectFit: "cover",
                borderRadius: "50px",
                border: "5px solid var(--md-sys-color-primary)",
              }}
              alt="Hello this is what my face looks like in very small"
            />
            <h2
              className={`${typography.headlineSmall} ${color.textNeutral}`}
              style={{ marginLeft: "25px" }}
            >
              Pedro Moraes
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div
              className={`${typography.labelLarge} ${color.textNeutral} ${style.description}`}
            >
              {/* PLACEHOLDER TEXT CHANGE LATER */}A Full-Stack Web Developer
              building Websites and Web Applications that leads to the success
              of the overall product.
            </div>
          </div>
        </div>
        <div className={style.socials}>
          <div
            style={{
              height: "75px",
              display: "flex",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <h2 className={`${typography.headlineMedium} ${color.textNeutral}`}>
              SOCIALS
            </h2>
          </div>
          <div className={style.icons}>
            <md-icon-button href="https://github.com/Algos-hub">
              <FontAwesomeIcon
                icon={faGithub}
                className={`${typography.headlineMedium} ${color.textNeutral}`}
              />
            </md-icon-button>
            <md-icon-button
              href="https://www.linkedin.com/in/pedrofmf"
              style={{ marginInline: "25px" }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`${typography.headlineMedium} ${color.textNeutral}`}
              />
            </md-icon-button>
            <md-icon-button onClick={() => router.push("/contact")}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={`${typography.headlineMedium} ${color.textNeutral}`}
              />
            </md-icon-button>
          </div>
        </div>
      </div>
      <md-divider />
      <div
        style={{
          paddingTop: "5px",
          height: "75px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={`${typography.labelMedium} ${color.textNeutral}`}>
          &copy; 2024. Made by Pedro Moraes
        </div>
      </div>
    </div>
  );
}
