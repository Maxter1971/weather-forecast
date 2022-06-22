# weather-forecast

# Домашнее задание "Прогноз погоды

Ссылка на github pages https://maxter1971.github.io/weather-forecast/

[![PR Sanity Check](https://github.com/Maxter1971/weather-forecast/actions/workflows/sanity-check.yml/badge.svg?branch=dev)](https://github.com/Maxter1971/weather-forecast/actions/workflows/sanity-check.yml)
[![Deploy to GithubPages](https://github.com/Maxter1971/weather-forecast/actions/workflows/deploy-to-gh-pages.yml/badge.svg?branch=dev)](https://github.com/Maxter1971/weather-forecast/actions/workflows/deploy-to-gh-pages.yml)
[![Add codesandbox link](https://github.com/Maxter1971/weather-forecast/actions/workflows/codesandbox-link-comment.yml/badge.svg?branch=dev)](https://github.com/Maxter1971/weather-forecast/actions/workflows/codesandbox-link-comment.yml)

## Описание

### Назначение проекта

Приложение отображает прогноз погоды в указанном пользователем населённом пункте.
При запуске приложения карта позиционируется на локации пользователя и отображается
прогноз погоды.
![](./img/1.png)
При вводе населённого пункта и нажатии кнопки "Поиск" указанный пункт отображается на карте,
и отображается прогноз погоды. В выпадающем списке "История" отображается
последние 10 населённых пунктов, которые искал пользователь. При клике на запись в списке
истории на карте отображается указанный населённый пункт, а также отображается текущая погода.
В истории отображается только уникальные записи.
![](./img/2.png)

### Структура проекта

В каталоге ./src расположены:
index.js
module.js
module.test.js

В каталоге ./css
style.css

**index.js** импортирует module.js, style.css, создает обработчики на поля поиска на наличие текста _inputChecker_,
обработчик нажатия кнопки "Поиск" _buttonClick_ и обработчик выбора населённого пункта в списке "История"
_selectorClick_. Запускает получение истории функцией getHistory и стартовую инициализацию приложения функцией
_start_.

**module.js** Реализует функцию иницализации приложения _start_, которая строит карту, определяет локацию пользователя
и получает прогноз погоду в текущей локации. Реализует фунции получения и записи истории _getHistory_
и _setHistory_. Функция _getWeather_ получает прогноз погоды. Функция _updateMap_ перестраивает карту по населенному пункту.
Реализует _inputChecker_, _selectorClick_, _buttonClick_.

**module.test.js** содержит тесты функций module.js

**style.css** содержит стили
