import { FormApi } from "../FormApi";
import { connect } from "react-redux";
import { applyLifecycle } from "react-lifecycle-component";

import { clearAndCreateCutups, getRandomGuardianArticle } from "../../actions";

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
  componentDidMount: () => dispatch(getRandomGuardianArticle()),
  onSubmit: () => dispatch(clearAndCreateCutups(false)),
  onNext: () => dispatch(getRandomGuardianArticle())
});

export const FormGuardian = connect(
  mapStateToProps,
  mapDispatchToProps
)(applyLifecycle(FormApi));
