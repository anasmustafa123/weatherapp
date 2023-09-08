import { main } from "./styles/main.css";
import { weatherToday } from "./script/weather";
import { fixedQuery } from "./script/fixedQuery";
import { Change } from "./script/weatherdom";
import {
  loading,
  appendValuesToDom,
  changeBackground,
  changeStyleColor,
  getHourForecast,
} from "./script/dom";
import { fetchCoordinates } from "./script/fetchCoordinates";

/* setting weather measure toggling */
let weatherDataNow;
var changeDom = new Change();
document.querySelectorAll(".mbtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("selected")) {
      const selected = document.querySelector(".mbtn.selected");
      btn.classList.add("selected");
      selected.classList.toggle("selected");
      changeWeatherMeasure(btn.id, changeDom, weatherDataNow);
      console.log(weatherDataNow);
    }
  });
});
document.querySelectorAll(".forecast").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("selected")) {
      const selected = document.querySelector(".forecast.selected");
      btn.classList.add("selected");
      selected.classList.toggle("selected"); 
    }
  });
});
document.querySelector(".forecast.hourly.btn").addEventListener("click", () => {
  let hourlyForeccastContainer = document.querySelector(
    ".forecast-container.hourly"
  );
  document.querySelector(".forecast-container.daily").classList.add("hide");
  hourlyForeccastContainer.classList.remove("hide");
  let finalResult = "";
  for (let i = weatherDataNow.hour; i < 24; i++) {
    finalResult += getHourForecast(weatherDataNow.getForecastDataHour(i));
  }
  hourlyForeccastContainer.innerHTML = finalResult;
});
document.querySelector(".forecast.daily.btn").addEventListener("click", () => {
  document.querySelector(".forecast-container.hourly").classList.add("hide");
  document.querySelector(".forecast-container.daily").classList.remove("hide");
});
/* search a query */
const search = document.getElementById("search");
search.addEventListener("change", () => {
  if (search.value.replaceAll(" ", "") != "") {
    let query = search.value;
    searchThenFetch(query);
    loading();
  }
});
document.querySelector("i.search").addEventListener("click", () => {
  if (search.value.replaceAll(" ", "") != "") {
    let query = search.value;
    searchThenFetch(query);
    loading();
  }
});

/* search the input query and select the first in result searched array */
const searchThenFetch = (query) => {
  fixedQuery(query).then(fetchThenLoad);
};

function fetchThenLoad(fixedQuery) {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e28ec3b945254a078d871023232807&q=${fixedQuery}&days=5`,
    { mode: "cors" }
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (resp) {
      let today = new weatherToday(resp);
      const changeDom = new Change();
      let state = getWeatherStatusNumber(today);
      changeBackground(state);
      changeStyleColor(state);
      /* append weather data */
      let measureType = document.querySelector(".mbtn.selected").id;
      appendValuesToDom(changeDom, today, measureType);
      weatherDataNow = today;
    })
    .catch(function (err) {
      console.log(err);
    });
}

const togglle = (btn, btnClassName, toggleClassName) => {
  const selected = document.querySelector(
    `.${btnClassName}.${toggleClassName}`
  );
  btn.classList.add(`${toggleClassName}`);
  selected.classList.toggle(`${toggleClassName}`);
};

const changeWeatherMeasure = (key, changeDom, weatherData) => {
  const dailyForecastDatas = document.querySelectorAll(".forecast-container.daily .forecast-data");
  const hourlyForecastDatas = document.querySelectorAll(".forecast-container.hourly .forecast-data");

  if (key == "c") {
    changeDom.temp = weatherData.temp_c;
    changeDom.temp_feelLike = weatherData.temp_feelLike_c;
    changeDom.windspeed = weatherData.wspeed_kph;
    let i = 1; /* counter for forecast days */
    dailyForecastDatas.forEach((day) => {
      let avgweather = day.querySelector(".day-avg-weather");
      let minweather = day.querySelector(".day-min-weather");
      let maxweather = day.querySelector(".day-max-weather");
      avgweather.textContent = weatherData.getForecastMaxTemp_c(i);
      minweather.textContent = weatherData.getForecastAvgTemp_c(i);
      maxweather.textContent = weatherData.getForecastMinTemp_c(i);
      i += 1;
    });
    hourlyForecastDatas.forEach(hour => {
      hour.querySelector('h2.day-weather').textContent = weatherData.getForecastDataHour(parseInt(hour.id)).temp_c
    })
  } else if (key == "f") {
    changeDom.temp = weatherData.temp_f;
    changeDom.temp_feelLike = weatherData.temp_feelLike_f;
    changeDom.windspeed = weatherData.wspeed_mph;
    let i = 1; /* counter for forecast days */
    dailyForecastDatas.forEach((day) => {
      let avgweather = day.querySelector(".day-avg-weather");
      let minweather = day.querySelector(".day-min-weather");
      let maxweather = day.querySelector(".day-max-weather");
      avgweather.textContent = weatherData.getForecastMaxTemp_f(i);
      minweather.textContent = weatherData.getForecastAvgTemp_f(i);
      maxweather.textContent = weatherData.getForecastMinTemp_f(i);
      i += 1;
    });
    hourlyForecastDatas.forEach(hour => {
      hour.querySelector('h2.day-weather').textContent = weatherData.getForecastDataHour(parseInt(hour.id)).temp_f
    })
  }
};
const getWeatherStatusNumber = (weatherData) => {
  if (weatherData.humidity__ >= 90 && weatherData.rain > 50) return "rain";
  if (weatherData.cloud < 25) {
    if (weatherData.hour >= 6 && weatherData.hour <= 20) {
      return "sunny";
    } else {
      return "clear";
    }
  } else if (weatherData.cloud <= 75) {
    if (weatherData.hour >= 6 && weatherData.hour <= 20) {
      return "partlycloudy";
    } else {
      return "night_cloudy";
    }
  } else return "cloudy";
};

loading();
fetchCoordinates().then(fetchThenLoad);
