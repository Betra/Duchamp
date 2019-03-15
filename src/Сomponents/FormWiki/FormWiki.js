// import { LoadingApi } from "../LoadingApi";
// import { addArticle } from "../../actions";

import { FormApi } from "../FormApi/FormApi";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const { title, image, text, brief, link } = state.articles;
  return {
    title,
    image,
    text,
    brief,
    link
  };
};

export const FormWiki = connect(mapStateToProps)(FormApi);
