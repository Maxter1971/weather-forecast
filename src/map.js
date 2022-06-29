import L from "leaflet";

let marker = {};
let geojsonFeature = {};
let myLayer = {};

export function initializeMap() {
  const map = L.map("map", {
    scrollWheelZoom: true,
  });

  const tileLayer = L.tileLayer(
    "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
        '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }
  ).addTo(map);
  console.log(L);
  console.log(map);
  console.log(tileLayer);

  return map;
}

export function updateMap(lat, lon, geoJson, map) {
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
    geometry: geoJson,
  };
  myLayer = L.geoJSON().addTo(map);
  myLayer.addData(geojsonFeature);
  const out = {};
  out.lat = lat;
  out.lon = lon;

  return out;
}
