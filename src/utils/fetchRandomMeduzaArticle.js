import { fetchAppendMeduzaList } from "./fetchAppendMeduzaList";
import { getRandomInRange } from "./getRandomInRange";
import { parseHtmlToPlain } from "./parseHtmlToPlain";

export const fetchRandomMeduzaArticle = async () => {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const meduzaUrl = "https://meduza.io/";
  const meduzaUrlApi = "https://meduza.io/api/v3/";
  const meduzaUrlQuery = "https://meduza.io/api/v3/search?";

  const collection = await fetchAppendMeduzaList(meduzaUrlQuery, 1, proxyUrl);

  const position = getRandomInRange(0, collection.length);

  const response = await fetch(proxyUrl + meduzaUrlApi + collection[position]);
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

  //itle,image,text,brief,link,

  article["link"] = meduzaUrl + article.url;
  article["brief"] = article.description;
  article["text"] = parseHtmlToPlain(article.content.body);

  if (article.image) article["image"] = meduzaUrl + article.image.large_url;
  else article["image"] = meduzaUrl + article.share_image;

  console.log(article.text);

  return article;
};
