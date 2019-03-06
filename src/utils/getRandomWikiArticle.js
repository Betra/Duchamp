import { convertJsonToArray } from './convertJsonToArray';
import { parseQuery } from './parseQuery';

export async function getRandomWikiArticle() {
  
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"
  const wikiUrl = "https://en.wikipedia.org/w/api.php?";
  
  let query = parseQuery({
    'format'        : 'json',
    'action'        : 'query',
    'generator'     : 'random',
    'grnnamespace'  : '0',
    'prop'          : 'pageimages|extracts',
    'piprop'        : 'original',
    'exintro'       : '1',
    'exsentences'   : '2',
    'explaintext'   : '1'
  });

  let request = proxyUrl + wikiUrl + query;
  
  const response =  await fetch(request);
  const data = await response.json()

  const page = convertJsonToArray(data.query.pages);
  const pageArray = convertJsonToArray(page[0]);

  let hasImg = pageArray.length === 5 ? true : false;
  page[0]['hasImg'] = hasImg;

  return page[0];
}