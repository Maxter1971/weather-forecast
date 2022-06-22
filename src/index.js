import {
  buttonClick,
  inputChecker,
  selectorClick,
  start,
  getHistory,
} from "./module";
import "../css/style.css";

const button = document.querySelector(".button");
const input = document.querySelector(".place");
const select = document.querySelector(".select");
button.addEventListener("click", buttonClick);
input.addEventListener("input", inputChecker);
select.addEventListener("change", (e) => {
  selectorClick(e.target.value);
});
getHistory();
start();
