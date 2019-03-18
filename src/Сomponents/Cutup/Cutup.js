import React from "react";
import styles from "./Cutup.module.css";

// <Cutup cut={true} ragged={false} > </Paper>
export function Cutup(props) {
  if (
    (props.cut || props.ragged) &&
    props.cut !== props.ragged &&
    props.ragged === true
  ) {
    //Case Ragged
  } else {
    //Case Cut
    return <div className={styles.paper}>{props.children}</div>;
  }
}
