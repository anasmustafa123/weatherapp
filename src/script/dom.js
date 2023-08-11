import loading_img from "../assets/loading_img.gif";
import loading_text from "../assets/loading_text.gif";
import clear__ from "../assets/clear.jpg";
import sunny__ from "../assets/sunny.jpg";
import cloudy__ from "../assets/cloudy.jpg";
import rain__ from "../assets/rain.jpg";
import night_cloudy__ from "../assets/night_cloudy.jpg";
import partlycloudy__ from "../assets/partlycloudy.jpg";
const changeToF = (changeDom) => {
  changeDom.temp = `${(
    (Number(document.getElementById("temp").textContent.split(" ")[0]) * 9) /
      5 +
    32
  ).toFixed(1)} °F`;
  changeDom.temp_feelLike = `feels like ${(
    (Number(
      document
        .getElementById("feel_like")
        .textContent.split(" ")[2]
        .split("°")[0]
    ) *
      9) /
      5 +
    32
  ).toFixed(1)} °F`;
  changeDom.windspeed = `${(
    Number(document.getElementById("wind-speed").textContent.split(" ")[0]) /
    1.609
  ).toFixed(1)} mi/h`;
  let i = 1;/* counter for forecast days */
  document.querySelectorAll(".forecast-data").forEach((day) => {
    let avgweather = day.querySelector(".day-avg-weather");
    let minweather = day.querySelector(".day-min-weather");
    let maxweather = day.querySelector(".day-max-weather");
    avgweather.textContent = `${(
      (Number(avgweather.textContent.split(" ")[0]) * 9) / 5 +
      32
    ).toFixed(1)} °F`;

    minweather.textContent = `${(
      (Number(avgweather.textContent.split(" ")[0]) * 9) / 5 +
      32
    ).toFixed(1)} °F`;

    maxweather.textContent = `${(
      (Number(avgweather.textContent.split(" ")[0]) * 9) / 5 +
      32
    ).toFixed(1)} °F`;
    i += 1;
  });
};
const changeToC = (changeDom) => {
  changeDom.temp = `${(
    ((Number(document.getElementById("temp").textContent.split(" ")[0]) - 32) *
      5) /
    9
  ).toFixed(1)} °C`;
  changeDom.temp_feelLike = `feels like ${(
    ((Number(
      document
        .getElementById("feel_like")
        .textContent.split(" ")[2]
        .split("°")[0]
    ) -
      32) *
      5) /
    9
  ).toFixed(1)} °C`;
  changeDom.windspeed = `${(
    Number(document.getElementById("wind-speed").textContent.split(" ")[0]) *
    1.609
  ).toFixed(1)} km/h`;
  let i = 1;/* counter for forecast days */
  document.querySelectorAll(".forecast-data").forEach((day) => {
    let avgweather = day.querySelector(".day-avg-weather");
    let minweather = day.querySelector(".day-min-weather");
    let maxweather = day.querySelector(".day-max-weather");
    avgweather.textContent = `${(
      ((Number(avgweather.textContent.split(" ")[0]) - 32) * 5) /
      9
    ).toFixed(1)} °C`;

    minweather.textContent = `${(
      ((Number(minweather.textContent.split(" ")[0]) - 32) * 5) /
      9
    ).toFixed(1)} °C`;

    maxweather.textContent = `${(
      ((Number(maxweather.textContent.split(" ")[0]) - 32) * 5) /
      9
    ).toFixed(1)} °C`;
    i += 1;
  });
};

const setForeCastData = (days, today, measureType) => {
  let i = 1;
  days.forEach((day) => {
    day.querySelector(".day-name").textContent = today.getForecastDayName(i);
    day.querySelector(".day-weather-icon").src =
      today.getForecastWeatherIcon(i);
    if (measureType == "c") {
      day.querySelector(".day-avg-weather").textContent =
        today.getForecastAvgTemp_c(i);
      day.querySelector(".day-min-weather").textContent =
        today.getForecastMinTemp_c(i);
      day.querySelector(".day-max-weather").textContent =
        today.getForecastMaxTemp_c(i);
    } else {
      day.querySelector(".day-avg-weather").textContent =
        today.getForecastAvgTemp_f(i);
      day.querySelector(".day-min-weather").textContent =
        today.getForecastMinTemp_f(i);
      day.querySelector(".day-max-weather").textContent =
        today.getForecastMaxTemp_f(i);
    }
    i += 1;
  });
};

const appendValuesToDom = (changeDom, today, measureType) => {
  changeDom.fullName = today.fullName;
  changeDom.date = today.date;
  changeDom.time = today.time;
  if (measureType == "c") {
    changeDom.temp = today.temp_c;
    changeDom.temp_feelLike = today.temp_feelLike_c;
    changeDom.windspeed = today.wspeed_kph;
  } else if (measureType == "f") {
    changeDom.temp = today.temp_f;
    changeDom.temp_feelLike = today.temp_feelLike_f;
    changeDom.windspeed = today.wspeed_mph;
  } else {
    console.error("invalid measure type (not c or f)");
  }
  changeDom.condition = today.condition;
  changeDom.humidity = today.humidity;
  changeDom.rain = today.rain;
  document.getElementById("temp-icon").src = today.iconUrl;
  let days = document.querySelectorAll(".forecast-data");
  setForeCastData(days, today, measureType);
};

const newImg = (url, classList) => {
  let img = document.createElement("img");
  img.src = url;
  img.classList.add(...classList);
  return img;
};
const clear = (child) => {
  child.textContent = "";
};
const appendLoodingIcons = (id, imgurl, classlist) => {
  clear(document.getElementById(id));
  document.getElementById(id).append(newImg(imgurl, classlist));
};
const appendToAllLoodingIcons = (className, imgurl, classlist) => {
  let objects = document.querySelectorAll(className).forEach((object) => {
    clear(object);
    object.append(newImg(imgurl, classlist));
  });
};
const loading = () => {
  document.getElementById("temp-icon").src = loading_img;
  appendLoodingIcons("country-fullname", loading_text, [
    "loading",
    "country-fullname",
  ]);
  document.querySelectorAll(".day-weather-icon").forEach((day) => {
    day.src = loading_img;
  });
  appendLoodingIcons("temp", loading_text, ["loading", "temp"]);
  appendLoodingIcons("date", loading_text, ["loading", "date"]);
  appendLoodingIcons("time", loading_text, ["loading", "time"]);
  appendLoodingIcons("condition", loading_text, ["loading", "condition"]);
  appendLoodingIcons("feel_like", loading_text, ["loading", "feel-like"]);
  appendLoodingIcons("humidity", loading_text, ["loading", "humidity"]);
  appendLoodingIcons("wind-speed", loading_text, ["loading", "wind-speed"]);
  appendLoodingIcons("rain", loading_text, ["loading", "rain"]);
  appendToAllLoodingIcons(".day-name", loading_text, ["loading", "day-name"]);
  appendToAllLoodingIcons(".day-avg-weather", loading_text, [
    "loading",
    "avg-weather",
  ]);
  appendToAllLoodingIcons(".day-min-weather", loading_text, [
    "loading",
    "min-weather",
  ]);
  appendToAllLoodingIcons(".day-max-weather", loading_text, [
    "loading",
    "max-weather",
  ]);
};
const changeBackground = (state) => {
  console.log(state);
  console.log('again');
  switch (state) {
    case "sunny":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${sunny__})`;
      break;
    case "clear":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${clear__})`;
      break;
    case "cloudy":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${cloudy__})`;
      break;
    case "partlycloudy":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${partlycloudy__})`;
      break;
    case "rain":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${rain__})`;
      break;
    case "night_cloudy":
      document.querySelector("section.main-container").style[
        "background-image"
      ] = `url(${night_cloudy__})`;
      break;      
  }
};
const changeStyleColor = (state) => {
  const html = document.querySelector("html");
  switch (state) {
    case "sunny":
      html.className = "sunny";
      break;
    case "clear":
      html.className = "clear";
      break;
    case "cloudy":
      html.className = "cloudy";
      break;
    case "partlycloudy":
      html.className = "partlycloudy";
      break;
    case "rain":
      html.className = "rain";
      break;
    case "night_cloudy":
      html.className = "night_cloudy";
  }
};

export {
  loading,
  appendValuesToDom,
  changeToF,
  changeToC,
  changeBackground,
  changeStyleColor,
};
