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
    'prop'          : 'extracts',
    'exchars'       : '500'
  });

  let request = proxyUrl + wikiUrl + query;
  
  const response =  await fetch(request);
  const data = await response.json();
  const page = convertJsonToArray(data.query.pages);
  
  console.log(page[0]);

  return page[0];
}