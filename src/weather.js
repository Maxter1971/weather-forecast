export function setWeather(data) {
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

  console.log(data);
  return data;
}
