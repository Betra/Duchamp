import { parseQuery } from "./parseQuery";

export const fetchAppendMeduzaList = async (url, pages = 1, proxy = "") => {
  let collection = [];

  let query = {
    chrono: "news",
    page: 0,
    per_page: 100,
    locale: "ru"
  };

  for (let i = 0; i < pages; i++) {
    query["page"] = i;
    let queryString = parseQuery(query);
    let request = proxy + url + queryString;

    const response = await fetch(request);
    const data = await response.json();

    collection.push(...data.collection);
  }

  return collection;
};
