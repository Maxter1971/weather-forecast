export function getHistory(storage) {
  const out = [];
  const select = document.querySelector(".select");
  select.innerHTML = "";
  const keys = Object.keys(storage).sort((a, b) => a - b);
  let i = keys.length;
  let finish = 0;
  if (i > 11) {
    finish = i - 11;
  }

  while (i > finish) {
    const storageItem = storage.getItem(keys[i]);
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
export function setHistory(place, storage) {
  if (storage.length === 0) {
    storage.setItem(0, place);
    storage.setItem(1, place);
  } else {
    const keys = Object.keys(storage);
    const i = keys.length;
    const findResult = Object.values(storage).filter(
      (value) => value === place
    ).length;
    if (findResult === 0) {
      storage.setItem(i + 1, place);
    }
  }
  return storage;
}
