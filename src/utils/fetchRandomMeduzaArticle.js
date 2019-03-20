import { getRandomInRange } from "./getRandomInRange";
import { parseHtmlToPlain } from "./parseHtmlToPlain";
import { parseQuery } from "./parseQuery";

export const fetchRandomMeduzaArticle = async (locale = "ru") => {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const meduzaUrl = "https://meduza.io/";
  const meduzaUrlApi = "https://meduza.io/api/v3/";
  const meduzaUrlQuery = "https://meduza.io/api/v3/search?";

  const page = getRandomInRange(1, 650);
  const articleNum = getRandomInRange(0, 99);

  let query = parseQuery({
    chrono: "news",
    page: page,
    per_page: 100,
    locale: locale
  });

  let request = proxyUrl + meduzaUrlQuery + query;
  const collection = await fetch(request, {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: null
  });

  const data = await collection.json();

  const articleUrl = data.collection[articleNum];

  const response = await fetch(proxyUrl + meduzaUrlApi + articleUrl, {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: null
  });
  let article = await response.json();

  article = article.root;

  delete article.document_type;
  delete article.full;
  delete article.version;
  delete article.prefs;
  delete article.authors;
  delete article.modified_at;
  delete article.with_banners;
  delete article.tag;
  delete article.source;
  delete article.share_title;
  delete article.pushed;
  delete article.pub_date;
  delete article.published_at;
  delete article.footer;

  article["link"] = meduzaUrl + article.url;
  article["brief"] = article.description;
  article["text"] = parseHtmlToPlain(article.content.body);
  article["locale"] = locale;

  article["image"] = article.image
    ? meduzaUrl + article.image.large_url
    : meduzaUrl + article.share_image;

  return article;
};
