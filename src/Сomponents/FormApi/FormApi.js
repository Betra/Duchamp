import React from "react";

import { ApiInfo } from "../ApiInfo";
import { Button } from "../Button";
import { LoadingApi } from "../LoadingApi";
import { ErrorMessage } from "../ErrorMessage";
import { Cutups } from "../Cutups";

import styles from "./FormApi.module.css";

export const FormApi = ({
  link,
  title,
  brief,
  image,
  onSubmit,
  hasError,
  error,
  isLoading,
  onNext,
  cutups
}) => {
  if (isLoading) return <LoadingApi />;
  else if (hasError) return <ErrorMessage error={error} />;
  else {
    return (
      <main>
        <section className={styles.formApi}>
          <ApiInfo link={link} title={title} brief={brief} imageUrl={image} />
          <section className={styles.buttons}>
            <Button onClick={onSubmit} />
            <Button onClick={onNext} value="Next" />
          </section>
        </section>
        <Cutups cutups={cutups} />
      </main>
    );
  }
};
