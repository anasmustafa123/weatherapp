import { main } from "./styles/main.css";
import { weatherToday } from "./script/weather";
import { fixedQuery } from "./script/fixedQuery";
import { Change } from "./script/weatherdom";
import {
  loading,
  appendValuesToDom,
  changeToC,
  changeToF,
  changeBackground,
  changeStyleColor,
} from "./script/dom";



/* search a query */
const search = document.getElementById("search");
search.addEventListener("change", () => {
  let query = search.value;
  searchThenFetch(query);
  loading();
});
document.querySelector("i.search").addEventListener("click", () => {
  let query = search.value;
  searchThenFetch(query);
  loading();
});

/* search the input query and select the first in result searched array */
const searchThenFetch = (query) => {
  fixedQuery(query).then(fetchThenLoad);
};

function fetchThenLoad(fixedQuery) {
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
      console.log(today.hour__);
      console.log(getWeatherStatusNumber(today));
      let state = getWeatherStatusNumber(today);
      changeBackground(state);
      changeStyleColor(state);
      /* append weather data */
      let measureType = document.querySelector(".btn.selected").id;
      appendValuesToDom(changeDom, today, measureType);
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (!btn.classList.contains("selected")) {
            const selected = document.querySelector(".selected");
            btn.classList.add("selected");
            selected.classList.toggle("selected");
            changeWeatherMeasure(btn.id, changeDom);
          }
        });
      });
    });
}
/* const changeWeatherMeasure = (key, changeDom, todayData) => {
  if (key == "f") changeToF(changeDom, todayData);
  else if (key == "c") changeToC(changeDom, todayData);
}; */

const changeWeatherMeasure = (key, changeDom) => {
  if (key == "f") changeToF(changeDom);
  else if (key == "c") changeToC(changeDom);
};
const getWeatherStatusNumber = (weatherData) => {
  if (weatherData.humidity__ >= 90) return "rain";
  if (weatherData.cloud__ <= 25) {
    if (weatherData.hour__ >= 6 && weatherData.hour__ <= 18) {
      return "sunny";
    } else {
      return "clear";
    }
  } else if (weatherData.cloud__ <= 75) {
    return "partlycloudy";
  } else return "cloudy";
};


/* search for alexandria egypt as start */
loading();
searchThenFetch('paris');