import React, { Component } from 'react';
import './Section.css';

export function Section(props) {
  return (
    <section className="option">
      {props.children}
    </section>
  );
}