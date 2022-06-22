// const L = require("leaflet");
import L from "leaflet";
import $ from "jquery";

let marker = {};
let geojsonFeature = {};
let myLayer = {};
let city = "";
let map;

// Set the position and zoom level of the map

// Initialize the base layer

export function start() {
  map = L.map("map", {
    scrollWheelZoom: true,
  });
  L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Set the position and zoom level of the map

  // Initialize the base layer
  L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  const out = {};
  $.getJSON("https://api.db-ip.com/v2/free/self", (data) => {
    console.log(data.city);
    city = data.city;
    out.city = city;
    out.updateMapAndWeather = updateMap(city);
  });
  return out;
}

export function getWeather(lat, lon) {
  const out = {};
  $.getJSON(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ce7e76cd71313e0673227d5d211c59ed`,
    (data) => {
      out.weatherRes = data;
      const weatherDiv = document.querySelector(".weather-forecast");
      weatherDiv.innerHTML = `
      <div>
        <h1>Пункт: ${data.name}</h1>
        <h2>Температура: ${Math.round(
          Number(data.main.temp) - 273.15
        )} градусов</h2>
        <img src='http://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png'/>
      </div>
      `;
    }
  );
  console.log(out);
  return out;
}
// функция возвращает сумму двух чисел
export function setMap(lat, lon, geojson) {
  map.setView([Number(lat), Number(lon)], 9);
  if (myLayer !== undefined) {
    map.removeLayer(myLayer);
  }
  if (marker !== undefined) {
    map.removeLayer(marker);
  }
  marker = L.marker([Number(lat), Number(lon)]).addTo(map);
  geojsonFeature = {
    type: "Feature",
    style: {
      fillColor: "#ff7800",
      color: "#000",
    },
    properties: {
      city: "Coors Field",
    },
    geometry: geojson,
  };
  myLayer = L.geoJSON().addTo(map);
  myLayer.addData(geojsonFeature);
  const out = {};
  out.lat = lat;
  out.lon = lon;
  out.getWeather = getWeather(lat, lon);
  return out;
}
export function buttonClick() {
  const input = document.querySelector(".place");
  city = input.value;
  // localStorage.setItem(city,city);
  setHistory();
  const updateMapWeatherRes = updateMap(city);
  const getHistoryRes = getHistory();
  const out = {
    updateMapAndWeather: updateMapWeatherRes,
    getHistory: getHistoryRes,
  };
  console.log(out);
  return out;
}
export function selectorClick(city) {
  return updateMap(city);
}
export function inputChecker() {
  const input = document.querySelector(".place");
  const button = document.querySelector(".button");
  if (input.value.length > 0) {
    button.hidden = false;
  } else {
    button.hidden = true;
  }
}
export function updateMap(city) {
  const out = {};
  fetch(
    `https://nominatim.openstreetmap.org/search.php?q=${city}&polygon_geojson=1&format=jsonv2`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response[0]);
      const { lat } = response[0];
      const { lon } = response[0];
      const geoJson = response[0].geojson;
      const setMapRes = setMap(lat, lon, geoJson, map);
      out.geo = response;
      out.setMapRes = setMapRes;
      // Do something with response.
    });
  return out;
}
export function getHistory() {
  const out = [];
  const select = document.querySelector(".select");
  select.innerHTML = "";
  const keys = Object.keys(localStorage).sort((a, b) => a - b);
  let i = keys.length;
  let finish = 0;
  if (i > 11) {
    finish = i - 11;
  }

  while (i > finish) {
    const storageItem = localStorage.getItem(keys[i]);
    const listItem = document.createElement("option");
    listItem.innerText = storageItem;
    select.append(listItem);
    out.push(storageItem);
    i--;
  }
  return out;
}
function setHistory() {
  const keys = Object.keys(localStorage);
  const i = keys.length;
  const findResult = Object.values(localStorage).filter(
    (value) => value === city
  ).length;
  if (findResult === 0) {
    localStorage.setItem(i + 1, city);
  }
}
