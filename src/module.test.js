import { getHistory, setHistory, getWeather } from "./module";

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
describe("getHistory", () => {
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
    // const select = document.body.querySelector(".select");
    // const weatherDiv = document.querySelector(".weather-forecast");

    window.localStorage = {};
    window.localStorage = (() => {
      let store = {};
      return {
        getItem(key) {
          return store[key];
        },
        setItem(key, value) {
          store[key] = value.toString();
        },
        clear() {
          store = {};
        },
        removeItem(key) {
          delete store[key];
        },
      };
    })();
    Object.defineProperty(window, "localStorage", {
      value: window.localStorage,
    });
    let city = "Москва";
    let setHistoryRes = setHistory(city);
    setHistoryRes = setHistory(city);
    city = "Минск";
    setHistoryRes = setHistory(city);
    setHistoryRes = setHistory(city);
    const getHistoryRes = getHistory();
    const getWeatherRes = getWeather(30.3806, 59.9179);
    expect(setHistoryRes.length).toBe(3);
    expect(setHistoryRes[1]).toBe("Москва");
    expect(getHistoryRes.length).toBe(2);
    expect(getHistoryRes[0]).toBe("Минск");
    expect(getHistoryRes[1]).toBe("Москва");
    // expect(getWeatherRes).toBe("Москва");
  });
});
