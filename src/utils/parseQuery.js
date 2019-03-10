export const parseQuery = query => {
  let search = "";

  for (let key in query) {
    search += key + "=" + query[key] + "&";
  }

  return search.substring(0, search.length - 1);
};
