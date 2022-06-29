export function getHistory() {
  const out = [];
  const select = document.querySelector(".select");
  select.innerHTML = "";
  const keys = Object.keys(localStorage).sort((a, b) => a - b);
  let i = keys.length;
  let finish = 0;
  if (i > 11) {
    finish = i - 11;
  }

  while (i > finish) {
    const storageItem = localStorage.getItem(keys[i]);
    const listItem = document.createElement("option");
    listItem.innerText = storageItem;
    if (storageItem !== null) {
      select.append(listItem);
      out.push(storageItem);
    }

    i--;
  }
  return out;
}
export function setHistory(place) {
  if (localStorage.length === 0) {
    localStorage.setItem(0, place);
    localStorage.setItem(1, place);
  } else {
    const keys = Object.keys(localStorage);
    const i = keys.length;
    const findResult = Object.values(localStorage).filter(
      (value) => value === place
    ).length;
    if (findResult === 0) {
      localStorage.setItem(i + 1, place);
    }
  }
  return localStorage;
}
