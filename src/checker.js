export function inputChecker() {
  const input = document.querySelector(".place");
  const button = document.querySelector(".button");
  if (input.value.length > 0) {
    button.hidden = false;
  } else {
    button.hidden = true;
  }
}
