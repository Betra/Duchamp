export function parseQuery(query) {
  let search = '';

  for (var key in query) {
    search += key+'='+query[key]+'&';
  }

  search.substring(0, search.length - 1);
  return search;
}