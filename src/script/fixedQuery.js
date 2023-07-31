/* returning the first serched name */
const fixedQuery = (query) => {
  return new Promise(function (resolve, reject) {
    fetch(
      `http://api.weatherapi.com/v1/search.json?key=e28ec3b945254a078d871023232807&q=${query}`,
      { mode: "cors" }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        /* taking the first result as the name */
        let fixedQuery = resp[0].name;
        resolve(fixedQuery);
      });
  });
};
export { fixedQuery };
