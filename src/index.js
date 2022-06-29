import { setHistory, getHistory } from "./history";
import { initializeMap, updateMap } from "./map";
import { setWeather } from "./weather";
import { getCityCoords, getStartLocation, getWeatherData } from "./loader";
import { inputChecker } from "./checker";
import "../css/style.css";

const button = document.querySelector(".button");
const input = document.querySelector(".place");
const select = document.querySelector(".select");
let map = {};

button.addEventListener("click", buttonClick);
input.addEventListener("input", inputChecker);
select.addEventListener("change", (e) => {
  selectorClick(e.target.value);
});

map = initializeMap();
getStartLocation().then((data) => updateAppByCity(data));

function updateAppByCity(city) {
  getCityCoords(city)
    .then((data) => updateMap(data.lat, data.lon, data.geoJSON, map))
    .then((data) => getWeatherData(data.lat, data.lon))
    .then((data) => setWeather(data));
  getHistory();
  return true;
}

export function buttonClick() {
  const input = document.querySelector(".place");
  const city = input.value;
  setHistory(city);
  updateAppByCity(city);
  return true;
}
export function selectorClick(city) {
  return updateAppByCity(city);
}
