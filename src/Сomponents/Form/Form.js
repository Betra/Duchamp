import React from "react";

import { Input } from "../Input";
import { Button } from "../Button";

import styles from "./Form.module.css";

import { getRandomPlaceholder } from "../../utils";

export const Form = React.forwardRef(
  ({ onSubmit, buttonDisabled = false }, ref) => (
    <form className={styles.formInput}>
      <Input ref={ref} placeholder={getRandomPlaceholder()} />
      <Button onClick={onSubmit} disabled={buttonDisabled} />
    </form>
  )
);
