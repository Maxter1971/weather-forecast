import { getHistory, setHistory } from "./history";

describe("getHistory", () => {
  it("getHistory result", () => {
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

    // window.localStorage = {};
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
    expect(setHistoryRes.length).toBe(3);
    expect(setHistoryRes[1]).toBe("Москва");
    expect(getHistoryRes.length).toBe(2);
    expect(getHistoryRes[0]).toBe("Минск");
    expect(getHistoryRes[1]).toBe("Москва");
  });
});
