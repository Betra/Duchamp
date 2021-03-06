import { FormApi } from "../FormApi";
import { connect } from "react-redux";
import { applyLifecycle } from "react-lifecycle-component";

import { clearAndCreateCutups, getRandomWikiArticle } from "../../actions";

const mapStateToProps = state => {
  const {
    hasError,
    error,
    isLoading,
    title,
    image,
    text,
    brief,
    link,
    locale
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
    locale,
    cutups
  };
};

const mapDispatchToProps = dispatch => ({
  componentDidMount: () => dispatch(getRandomWikiArticle("en")),
  onSubmit: () => dispatch(clearAndCreateCutups(false)),
  onNext: () => dispatch(getRandomWikiArticle("en"))
});

export const FormWiki = connect(
  mapStateToProps,
  mapDispatchToProps
)(applyLifecycle(FormApi));
