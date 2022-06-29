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
    localStorage.clear();
    let city = "London";
    let setHistoryRes = setHistory(city, localStorage);
    setHistoryRes = setHistory(city, localStorage);
    city = "Paris";
    setHistoryRes = setHistory(city, localStorage);
    setHistoryRes = setHistory(city, localStorage);
    const getHistoryRes = getHistory(localStorage);
    expect(setHistoryRes.length).toBe(3);
    expect(setHistoryRes[1]).toBe("London");
    expect(getHistoryRes.length).toBe(2);
    expect(getHistoryRes[0]).toBe("Paris");
    expect(getHistoryRes[1]).toBe("London");
  });
});
