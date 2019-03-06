import React from 'react';
import './ParsedApiPage.css';

export const ParsedApiPage  = props => (
  <section className="suggestion">
    {props.imageUrl !== '' &&
      <a href={props.link} className="suggestion--image">
        <img src={props.imageUrl} alt={props.title}  />
      </a>
    }
    
    <section className="suggestion--text">
      <section className="suggestion--header">
        <a href={props.link}>
          {props.title}
        </a>
      </section>

      <section className="suggestion--brief">
        {props.brief}
      </section>
    </section>
  </section>
);