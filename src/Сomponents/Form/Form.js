import React from "react";

import { Input } from "../Input";
import { Button } from "../Button";
import { Cutups } from "../Cutups";

import { getRandomPlaceholder } from "../../utils";

import styles from "./Form.module.css";

export const Form = ({ cutups, onSubmit, buttonDisabled = false }) => {
  return (
    <form className={styles.formInput}>
      <Input placeholder={getRandomPlaceholder()} />
      <Button onClick={onSubmit} disabled={buttonDisabled} />
      <Cutups cutups={cutups} />
    </form>
  );
};
