import { setHistory } from "./history";
import { initializeMap } from "./map";
import { getStartLocation } from "./loader";
import { inputChecker } from "./checker";
import { updateAppByCity } from "./updateApp";
import "../css/style.css";

const button = document.querySelector(".button");
const input = document.querySelector(".place");
const select = document.querySelector(".select");

const map = initializeMap();
getStartLocation().then((data) => updateAppByCity(data, map));

button.addEventListener("click", buttonClick);
input.addEventListener("input", inputChecker);
select.addEventListener("change", (e) => {
  selectorClick(e.target.value);
});

export function buttonClick() {
  const input = document.querySelector(".place");
  const city = input.value;
  setHistory(city, localStorage);
  updateAppByCity(city, map);
  return true;
}
export function selectorClick(city) {
  return updateAppByCity(city, map);
}
