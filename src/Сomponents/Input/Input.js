import React from "react";

import styles from "./Input.module.css";

export const Input = React.forwardRef(({ placeholder }, ref) => (
  <textarea className={styles.inputArea} ref={ref} placeholder={placeholder} />
));
