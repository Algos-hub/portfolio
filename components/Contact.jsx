import React, { useEffect, useRef, useState } from "react";
import "../material_3_module/web/button/filled-button.js";
import "../material_3_module/web/textfield/outlined-text-field.js";
import "../material_3_module/web/icon/icon.js";
import "../material_3_module/web/divider/divider.js";
import style from "../styles/Contact.module.css";
import typography from "../styles/themes/typography.module.css";
import color from "../styles/themes/colors.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AboutButton from "./AboutButton";

export default function Contact({ darkMode }) {
  const form = useRef();
  const [alertMesage, setAlertMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const submission = form.current;
    const mail = {
      email: submission.user_email.value,
      name: submission.name.value,
      subject: submission.subject.value,
      message: submission.message.value,
    };
    console.log(mail);
    const x = document.getElementById("alert");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.current.user_email.value.match(emailRegex)) {
      setAlertMessage("Something went wrong, try again later.");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    } else {
      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mail),
      })
        .then((response) => {
          response.json();
          console.log(mail);
          console.log(response);
          if (response.status !== 200) {
            setAlertMessage("Something went wrong, try again later.");
            x.className = "show";
            setTimeout(function () {
              x.className = x.className.replace("show", "");
            }, 3000);
          } else {
            setAlertMessage("Email sent.");
            x.className = "show";
            setTimeout(function () {
              x.className = x.className.replace("show", "");
            }, 3000);
          }
        })
        .catch((error) => {
          console.log(error);
          console.log(error.text);
          setAlertMessage("Something went wrong, try again later.");
          x.className = "show";
          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 3000);
        });
    }
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", "contact");
    document.querySelector("#__next").scrollTop = 0;
  }, []);
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ delay: 0.2, type: "linear" }}
    >
      <div className={style.main}>
        <div className={style.bannerContainer}>
          <div className={darkMode ? style.bannerDark : style.banner}>
            <h1 className={`${typography.displayLarge} ${color.textNeutral}`}>
              Contact
            </h1>
            <div
              className={`${typography.titleLarge} ${color.textNeutral} ${style.description}`}
            >
              {/* PLACEHOLDER TEXT CHANGE LATER */}Feel free to Contact me on
              LinkedIn or by submitting the form below and I will get back to
              you as soon as possible
            </div>
          </div>
        </div>
        <div className={style.info}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: 640,
              width: "100%",
            }}
          >
            <h1
              className={`${typography.displayMedium} ${color.textNeutral}`}
              style={{ margin: "200px 0px 24px 0px" }}
            >
              Where to find me
            </h1>

            <AboutButton
              title={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>LinkedIn</div>
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              }
              description="You can message me directly on LinkedIn here."
              path="https://www.linkedin.com/in/pedrofmf"
            />
            <md-divider
              style={{
                margin: "100px 0 100px 0",
                width: "40%",
                alignSelf: "center",
              }}
            />
          </div>
        </div>
        <div className={style.emailContainer}>
          <div className={style.form}>
            <form
              className={`${color.surfaceVariant} ${style.formItems}`}
              id="form"
              ref={form}
              method="post"
              onSubmit={sendEmail}
            >
              <md-outlined-text-field
                class={style.textField}
                required
                label="Name"
                type="text"
                name="name"
              />
              <md-outlined-text-field
                class={style.textField}
                required
                label="Email"
                type="email"
                name="user_email"
              />
              <md-outlined-text-field
                class={style.textField}
                label="Subject"
                type="text"
                required
                name="subject"
              />
              <md-outlined-text-field
                required
                class={style.textArea}
                label="Message"
                type="textarea"
                name="message"
              />
              <md-filled-button
                style={{ width: "25%" }}
                trailing-icon
                type="submit"
                value="Send"
              >
                Send
                <md-icon slot="icon">send</md-icon>
              </md-filled-button>
            </form>
          </div>
        </div>
      </div>
      <div id="alert">{alertMesage}</div>
    </motion.main>
  );
}
