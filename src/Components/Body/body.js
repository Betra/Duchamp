import React, { Component } from 'react';
import styles from './body.module.css';
import Text from '../Text/Text';
import InputArea from '../InputArea/InputArea';



function hookText(props) {
  alert("HEY");
}
function Body(props) {
  
  return (
    <div className={styles.layout}>
      <header>
        sdsa
      </header>
      
      <section className={styles.InputArea} id="input"
         >
        <InputArea>
        <Text />
        </InputArea>
      </section>
      
      
      <section className={styles.ParseArea}>
        {Math.PI}
      </section>

      <section className={styles.BoardArea}>
        s
      </section>
    </div>
    );
}

export default Body

