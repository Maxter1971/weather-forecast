import { setWeather } from "./weather";

describe("setWeather", () => {
  it("setWeather result", () => {
    document.body.innerHTML =
      '<div id="map"></div>' +
      '<div class="find">' +
      '<label class="place-lable"' +
      ">Введите название города:" +
      '<input class="place" type="input" />' +
      '<button class="button" hidden="true">Поиск</button>' +
      "</label>" +
      '<label class="weather-lable"' +
      ">Прогноз погоды:" +
      '<div class="weather-forecast"></div>' +
      "</label>" +
      '<label class="history-lable"' +
      ">История:" +
      '<select class="select"></select>' +
      "</label>" +
      "</div>";

    const data = {
      coord: {
        lon: 30.3806,
        lat: 59.9179,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      base: "stations",
      main: {
        temp: 300.42,
        feels_like: 299.96,
        temp_min: 296.49,
        temp_max: 303.12,
        pressure: 1019,
        humidity: 35,
      },
      visibility: 10000,
      wind: {
        speed: 3,
        deg: 120,
      },
      clouds: {
        all: 0,
      },
      dt: 1656506851,
      sys: {
        type: 2,
        id: 197864,
        country: "RU",
        sunrise: 1656463163,
        sunset: 1656530649,
      },
      timezone: 10800,
      id: 873900,
      name: "Smolenskoye",
      cod: 200,
    };
    expect(setWeather(data)).toBe(data);
  });
});
