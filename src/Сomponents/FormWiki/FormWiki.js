import { FormApi } from "../FormApi";
import { connect } from "react-redux";
import { applyLifecycle } from "react-lifecycle-component";

import { clearAndCreateCutups, addArticle } from "../../actions";

const mapStateToProps = state => {
  const {
    hasError,
    error,
    isLoading,
    title,
    image,
    text,
    brief,
    link
  } = state.article;
  const cutups = state.cutups;

  return {
    hasError,
    error,
    isLoading,
    title,
    image,
    text,
    brief,
    link,
    cutups
  };
};

const mapDispatchToProps = dispatch => ({
  componentDidMount: () => dispatch(addArticle()),
  onSubmit: () => dispatch(clearAndCreateCutups(false)),
  onNext: () => dispatch(addArticle())
});

export const FormWiki = connect(
  mapStateToProps,
  mapDispatchToProps
)(applyLifecycle(FormApi));
