export const convertJsonToArray = json => {
  const result = [];
  const keys = Object.keys(json);
  keys.forEach(function(key) {
    result.push(json[key]);
  });
  return result;
};
