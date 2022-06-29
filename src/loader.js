export async function getStartLocation() {
  let city = "";
  const response = await fetch("https://api.db-ip.com/v2/free/self");
  const data = await response.json();
  city = data.city;

  if (city.indexOf("(") !== -1) {
    city = city.slice(0, city.indexOf("(") - 1);
  }
  console.log(city);
  return city;
}

export async function getCityCoords(city) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search.php?q=${city}&polygon_geojson=1&format=jsonv2`
  );
  const data = await response.json();
  const { lat } = data[0];
  const { lon } = data[0];
  const geoJson = data[0].geojson;
  const out = {};
  out.lat = lat;
  out.lon = lon;
  out.geoJSON = geoJson;
  console.log(out);
  return out;
}

export async function getWeatherData(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ce7e76cd71313e0673227d5d211c59ed`
  );
  const data = await response.json();
  console.log(data);
  return data;
}
