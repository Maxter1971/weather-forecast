import { inputChecker } from "./checker";

describe("inputChecker", () => {
  it("inputChecker result", () => {
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

    const input = document.querySelector(".place");
    const button = document.querySelector(".button");
    input.value = "";
    inputChecker();
    expect(button.hidden).toBeTruthy();
    input.value = "a";
    inputChecker();
    expect(button.hidden).toBeFalsy();
  });
});
