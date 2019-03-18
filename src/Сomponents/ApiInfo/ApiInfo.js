import React from "react";

import styles from "./ApiInfo.module.css";

export const ApiInfo = ({ imageUrl, link, title, brief }) => (
  <section className={styles.suggestion}>
    {imageUrl !== "" && (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className={styles.suggestionImage}
      >
        <img src={imageUrl} alt={title} />
      </a>
    )}

    <section className={styles.suggestionText}>
      <section className={styles.suggestionHeader}>
        <a target="_blank" rel="noopener noreferrer" href={link}>
          {title}
        </a>
      </section>

      <section className={styles.suggestionBrief}>{brief}</section>
    </section>
  </section>
);

/*
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  };
};

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

*/
