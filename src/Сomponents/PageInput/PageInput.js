import React, { useRef } from "react";
import { connect } from "react-redux";

import { Form } from "../Form";
import { shuffleArray, cutRandomPieces } from "../../utils";

import { addCutup, clearCutups } from "../../actions";

export let PageInput = ({ dispatch }) => {
  const ref = useRef(null);

  return (
    <main>
      <Form
        ref={r => (ref.current = r)}
        onSubmit={() => {
          dispatch(clearCutups());
          let cutUps = cutRandomPieces(ref.current.value);
          cutUps = shuffleArray(cutUps);
          cutUps.forEach(cutUp => dispatch(addCutup(cutUp)));
        }}
      />
    </main>
  );
};

PageInput = connect()(PageInput);
