import { buttonClick, inputChecker } from "./src/operations";

const button = document.querySelector(".button");
const input = document.querySelector(".place");
button.addEventListener("click", buttonClick);
input.addEventListener("input", inputChecker);
