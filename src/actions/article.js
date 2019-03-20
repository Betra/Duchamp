import {
  fetchRandomWikiArticle,
  fetchRandomMeduzaArticle,
  fetchRandomGuardianArticle
} from "../utils";
import { clearCutups } from "./clearCutups";

export const article = (state = {}, action) => {
  switch (action.type) {
    case "ARTICLE_RETURNED_ERROR":
      return {
        ...state,
        hasError: action.hasError,
        error: action.error,
        isLoading: false
      };
    case "ARTICLE_IS_LOADING":
      return { ...state, isLoading: action.isLoading };

    case "ARTICLE_FETCH_DATA_SUCCESS":
      return {
        title: action.title,
        image: action.image,
        text: action.text,
        brief: action.brief,
        link: action.link,
        locale: action.locale,
        isLoading: false
      };
    default:
      return state;
  }
};

export const articleReturnedError = (bool = false, error) => ({
  type: "ARTICLE_RETURNED_ERROR",
  hasError: bool,
  error
});

export const articleIsLoading = (bool = true) => ({
  type: "ARTICLE_IS_LOADING",
  isLoading: bool
});

export const articleFetchDataSuccess = ({
  title,
  brief,
  image,
  link,
  text,
  locale
}) => ({
  type: "ARTICLE_FETCH_DATA_SUCCESS",
  title,
  brief,
  image,
  link,
  text,
  locale
});

export const getRandomWikiArticle = locale => async dispatch => {
  dispatch(articleIsLoading());
  dispatch(clearCutups());

  await fetchRandomWikiArticle(locale)
    .then(data => dispatch(articleFetchDataSuccess(data)))
    .catch(error => {
      console.log(error);
      console.log(typeof error);
      dispatch(articleReturnedError(true, error.message));
    });
};

export const getRandomMeduzaArticle = locale => async dispatch => {
  dispatch(articleIsLoading());
  dispatch(clearCutups());

  await fetchRandomMeduzaArticle(locale)
    .then(data => dispatch(articleFetchDataSuccess(data)))
    .catch(error => {
      console.log(error);
      console.log(typeof error);
      dispatch(articleReturnedError(true, error.message));
    });
};

export const getRandomGuardianArticle = locale => async dispatch => {
  dispatch(articleIsLoading());
  dispatch(clearCutups());

  await fetchRandomGuardianArticle(locale)
    .then(data => dispatch(articleFetchDataSuccess(data)))
    .catch(error => {
      console.log(error);
      console.log(typeof error);
      dispatch(articleReturnedError(true, error.message));
    });
};
