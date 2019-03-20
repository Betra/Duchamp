import { parseQuery } from "./parseQuery";
import { parseHtmlToPlain } from "./parseHtmlToPlain";
import { getRandomInRange } from "./getRandomInRange";

export const fetchRandomGuardianArticle = async (locale = "en") => {
  const guardianUrl = "https://content.guardianapis.com/search?";

  const apiKey = process.env.REACT_APP_GUARDIAN_KEY;

  const page = getRandomInRange(1, 190);
  const articleNumber = getRandomInRange(0, 199);

  let query = parseQuery({
    format: "json",
    page: page,
    "page-size": 200,
    "from-date": "2010-01-01",
    "show-blocks": "body",
    "show-fields": "headline,thumbnail",
    "api-key": apiKey
  });

  let request = guardianUrl + query;
  const response = await fetch(request);
  const data = await response.json();

  const article = data.response.results[articleNumber];

  article["title"] = article.webTitle;
  article["image"] = article.fields.thumbnail ? article.fields.thumbnail : "";
  article["link"] = article.webUrl;
  article["brief"] = article.fields.headline;
  article["text"] = parseHtmlToPlain(article.blocks.body[0].bodyHtml);
  article["locale"] = locale;

  return article;
};
