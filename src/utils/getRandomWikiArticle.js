import { convertJsonToArray } from "./convertJsonToArray";
import { parseQuery } from "./parseQuery";
import { parseWikiText } from "./parseWikiText";
import { getSentencesFromText } from "./getSentencesFromText";

export async function getRandomWikiArticle() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const wikiUrl = "https://en.wikipedia.org/w/api.php?";

  let query = parseQuery({
    format: "json",
    action: "query",
    generator: "random",
    grnnamespace: "0",
    prop: "pageimages|extracts",
    piprop: "original",
    exlimit: "max",
    explaintext: "1"
  });

  let request = proxyUrl + wikiUrl + query;

  const response = await fetch(request);
  response.catch(error => console.log(error));
  const data = await response.json();

  const page = convertJsonToArray(data.query.pages)[0];
  const pageArray = convertJsonToArray(page);

  let hasImg = pageArray.length === 5 ? true : false;
  page["hasImg"] = hasImg;
  page["text"] = parseWikiText(page.extract);
  page["extract"] = getSentencesFromText(page.text, 2);

  return page;
}
