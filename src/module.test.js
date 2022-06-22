import { getHistory } from "./module";

// describe("start", () => {
//  it("start result", () => {
//    jest.mock('./leaflet');
//    document.body.innerHTML =
//    '<div id="map"></div>'+
//    '<div class="find">'+
//      '<label class="place-lable"'+
//        '>Введите название города:'+
//        '<input class="place" type="input" />'+
//        '<button class="button" hidden="true">Поиск</button>'+
//      '</label>'+

//      '<label class="weather-lable"'+
//        '>Прогноз погоды:'+
//        '<div class="weather-forecast"></div>'+
//      '</label>'+
//      '<label class="history-lable"'+
//       '>История:'+
//        '<select class="select"></select>'+
//      '</label>'+
//    '</div>';
//    const startRes = start();
//    expect(startRes).toHaveProperty('city');
//    expect(startRes.city).toBeDefined();
//    expect(startRes.city).not.toBeNull();
//    expect(startRes).toHaveProperty('updateMapAndWeather');
//    expect(startRes.updateMapAndWeather).toBeDefined();
//    expect(startRes.updateMapAndWeather).not.toBeNull();
//  });
// });
describe("getWeather", () => {
  it("getWeather result", () => {
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
    jest.mock("leaflet");
    // const startRes = start();
    // const button = document.body.querySelector(".button");
    // const input = document.querySelector(".place");
    const select = document.body.querySelector(".select");
    const weatherDiv = document.querySelector(".weather-forecast");
    const getHistoryRes = getHistory();
    // const getWeatherRes = getWeather(30.3806, 59.9179);
    // const weatherRes = getWeatherRes.weatherRes;
    // expect(weatherRes.name).toBe("Smolenskoye");
  });
});
