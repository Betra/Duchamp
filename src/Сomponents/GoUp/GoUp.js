import React, { useEffect } from "react";

import styles from "./GoUp.module.css";

import { goUpAnimation } from "../../utils";

import { ScrollTo } from "react-scroll-to";

export const GoUp = () => {
  useEffect(() => window.addEventListener("scroll", goUpAnimation));
  return (
    <ScrollTo>
      {({ scrollTo }) => (
        <button
          type="button"
          id="upper"
          className={styles.goUp}
          onClick={() => {
            document.getElementById("upper").style.transform =
              "translateY(30vw)";
            document.getElementById("menu").style.opacity = "1";
            document.getElementById("menu").style.width = "40%";
            document.getElementById("description").style.opacity = "1";
            document.getElementById("heading").style.opacity = "1";
            scrollTo({
              y: 0,
              smooth: true
            });
          }}
        >
          Back To Top!
        </button>
      )}
    </ScrollTo>
  );
};
