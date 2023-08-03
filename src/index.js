import { main } from "./styles/main.css";
import { weatherToday } from "./script/weather";
import { fixedQuery } from "./script/fixedQuery";
import { Change } from "./script/weatherdom";
import { loading, appendValuesToDom } from "./script/dom";

/* search a query */
const search = document.getElementById("search");
search.addEventListener("change", () => {
  let query = search.value;
  console.log(query);
  searchThenFetch(query);
  loading();
});
document.querySelector("i.search").addEventListener("click", () => {
  let query = search.value;
  console.log(query);
  searchThenFetch(query);
  loading();
});

/* search the input query and select the first in result searched array */
const searchThenFetch = (query) => {
  console.log(query);
  fixedQuery(query).then(fetchThenLoad);
};

function fetchThenLoad(fixedQuery) {
  console.log(fixedQuery);
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=e28ec3b945254a078d871023232807&q=${fixedQuery}&days=3`,
    { mode: "cors" }
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (resp) {
      console.log(resp);
      const today = new weatherToday(resp);
      const changeDom = new Change();
      /* append weather data */
      let measureType = document.querySelector(".btn.selected").id;
      appendValuesToDom(changeDom, today, measureType);
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (!btn.classList.contains("selected")) {
            const selected = document.querySelector(".selected");
            toggle(btn);
            toggle(selected);
          }
        });
      });
    });
}
