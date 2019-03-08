import React from 'react';
import './PageInfo.module.css';

export const PageInfo = (props) => (
  <section className="info">
    <h1>
      {props.header}
    </h1>
    {props.children}
  </section>
);