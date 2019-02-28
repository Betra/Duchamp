import React from 'react';

import nyt from "../../assets/nyt.svg";
import wiki from "../../assets/wiki.svg";
import folder from "../../assets/text.svg";
import meduza from "../../assets/meduza.svg";

import { Section } from "../Section";

import styles from "./MethodChoice.module.css";

export function MethodChoice () {
  return(
    <main className="choices">
      <Section icon={folder}>Paste your text</Section>
      <Section icon={wiki}>Random article from <b>Wikipedia</b></Section>
      <Section icon={nyt}>Random article from <b>NY Times</b></Section>
      <Section icon={meduza}>Random article from <b>Meduza</b></Section>
    </main>
  );
}