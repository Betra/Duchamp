import React from "react";
import { Link } from "react-router-dom";

import nyt from "../../assets/nyt.svg";
import wiki from "../../assets/wiki.svg";
import folder from "../../assets/text.svg";
import meduza from "../../assets/meduza.svg";

import { Section } from "../Section";
import styles from "./BodyWelcome.module.css";

export const BodyWelcome = () => (
  <main className={styles.choices}>
    <Link to="/Input">
      <Section icon={folder}>Paste your text</Section>
    </Link>

    <Link to="/api?Wiki">
      <Section icon={wiki}>
        Random article from <b>Wikipedia</b>
      </Section>
    </Link>

    <Link to="/api?NYT">
      <Section icon={nyt}>
        Random article from <b>NY Times</b>
      </Section>
    </Link>

    <Link to="/api?Meduza">
      <Section icon={meduza}>
        Random article from <b>Meduza</b>
      </Section>
    </Link>
  </main>
);
