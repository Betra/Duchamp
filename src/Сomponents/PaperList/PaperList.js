import React from "react";

import { Paper } from "../Paper";
import styles from "./PaperList.module.css";

export const PaperList = ({ cutUps }) => (
  <div className={styles.papers}>
    {cutUps.map((cutUp, id) => (
      <Paper key={id}>{cutUp}</Paper>
    ))}
  </div>
);
