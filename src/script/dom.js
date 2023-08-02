import loading_img from "../assets/loading_img.gif";
import loading_text from "../assets/loading_text.gif";

const toggle = (btn) => {
    if (btn.classList.contains("selected")) {
      btn.classList.remove("selected");
    } else {
      btn.classList.add("selected");
    }
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
  
  const loading = () => {
    document.getElementById("temp-icon").src = loading_img;
    appendLoodingIcons("country-fullname", loading_text, [
      "loading",
      "country-fullname",
    ]);
    appendLoodingIcons("temp", loading_text, ["loading", "temp"]);
    appendLoodingIcons("date", loading_text, ["loading", "date"]);
    appendLoodingIcons("time", loading_text, ["loading", "time"]);
    appendLoodingIcons("condition", loading_text, ["loading", "condition"]);
    appendLoodingIcons("feel_like", loading_text, ["loading", "feel-like"]);
    appendLoodingIcons("humidity", loading_text, ["loading", "humidity"]);
    appendLoodingIcons("wind-speed", loading_text, ["loading", "wind-speed"]);
    appendLoodingIcons("rain", loading_text, ["loading", "rain"]);
  }
  export { loading, appendValuesToDom };