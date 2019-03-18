import React from "react";

import { Cutup } from "../Cutup";
import styles from "./Cutups.module.css";

export const Cutups = ({ cutups }) => (
  <div className={styles.papers}>
    {Object.keys(cutups).map((key, index) => (
      <Cutup key={index}> {cutups[key]} </Cutup>
    ))}
  </div>
);
