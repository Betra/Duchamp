import React from "react";

import { ApiInfo } from "../ApiInfo";
import { Button } from "../Button";
import { LoadingApi } from "../LoadingApi";
import { ErrorMessage } from "../ErrorMessage";
import { Cutups } from "../Cutups";

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
        <section>
          <ApiInfo link={link} title={title} brief={brief} imageUrl={image} />
          <Button onClick={onSubmit} />
          <Button onClick={onNext} value="Next" />
        </section>
        <Cutups cutups={cutups} />
      </main>
    );
  }
};
