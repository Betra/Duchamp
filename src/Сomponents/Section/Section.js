import React from 'react';
import './Section.css';

export function Section(props) {
  
  return (
    <section className="option">
    <img src={props.icon} alt="Icon" width={32} />
      <span className='option__text'>{props.children}</span>
    </section>
  );
}
