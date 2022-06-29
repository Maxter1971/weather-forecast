import { getCityCoords, getWeatherData } from "./loader";
import { getHistory } from "./history";
import { updateMap } from "./map";
import { setWeather } from "./weather";

export function updateAppByCity(city, map) {
  getCityCoords(city)
    .then((data) => updateMap(data.lat, data.lon, data.geoJSON, map))
    .then((data) => getWeatherData(data.lat, data.lon))
    .then((data) => setWeather(data));
  getHistory(localStorage);
  return true;
}
