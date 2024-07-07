import "./style.css";
import { GetWeather, getCurrLocation } from "./api";

class weatherApp {
  constructor() {
    this.cityDiv = document.querySelector("#city");
    this.icon = document.querySelector("#icon");
    this.weatherDiv = document.querySelector("#weather");
    this.searchCityForm = document.querySelector("#search");
    this.forecastWrapper = document.querySelector(".scrolling-wrapper");
  }

  //Initialize
  onLoad() {
    //Grab weather on load if applicable
    const result = getCurrLocation();
    result.then((res) => {
      // console.log(res);
      this.displayWeather(res);
    });

    //Add event listeners
    this.cityDiv.addEventListener("mouseover", () => {
      this.cityDiv.classList.add("bg-opacity-50");
    });
    this.cityDiv.addEventListener("mouseout", () => {
      this.cityDiv.classList.remove("bg-opacity-50");
    });

    this.cityDiv.addEventListener("click", () => {
      this.searchCityForm.classList.remove("hidden");
      this.cityDiv.classList.add("hidden");
    });

    this.searchCityForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formValue = document.getElementById("search-input");
      const name = formValue.value;
      formValue.value = "";

      GetWeather(name).then((res) => {
        this.displayWeather(res);
        this.searchCityForm.classList.add("hidden");
        this.cityDiv.classList.remove("hidden");
      });
    });
  }

  displayWeather(weatherObject) {
    this.cityDiv.textContent = weatherObject[0].location.name;
    this.icon.src = weatherObject[0].current.condition.icon;
    this.weatherDiv.textContent =
      // biome-ignore lint/style/useTemplate: <explanation>
      "°" +
      weatherObject[0].current.temp_f +
      " - " +
      weatherObject[0].current.condition.text;

    // Forecast weather
    this.forecastWrapper.innerHTML = "";
    // biome-ignore lint/complexity/noForEach: <explanation>
    weatherObject[1].forecast.forecastday[0].hour.forEach((hourData) => {
      // console.log(hourData);
      const card = document.createElement("div");
      card.id = "card";
      const img = document.createElement("img");
      img.src = hourData.condition.icon;
      img.alt = "weather icon";
      card.appendChild(img);
      const forecastTime = document.createElement("h2");

      const inputString = hourData.time;
      const date = new Date(inputString);
      let hours = date.getHours();
      const minutes = date.getMinutes();

      // Determine AM or PM
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;

      forecastTime.textContent = formattedTime;
      card.appendChild(forecastTime);
      const forecastWeather = document.createElement("h2");
      forecastWeather.textContent = hourData.condition.text;
      card.appendChild(forecastWeather);

      this.forecastWrapper.appendChild(card);
    });
  }
}

const app = new weatherApp();
app.onLoad();
