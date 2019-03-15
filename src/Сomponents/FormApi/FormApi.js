import React from "react";

import { ApiInfo } from "../ApiInfo";
import { Button } from "../Button";

export const FormApi = ({ link, title, brief, image }) => (
  <section>
    <ApiInfo link={link} title={title} brief={brief} imageUrl={image} />
    <Button onClick={onsubmit} />
  </section>
);
