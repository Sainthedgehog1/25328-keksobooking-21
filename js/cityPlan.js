'use strict';

const map = document.querySelector(`.map`);
const mapFilter = document.querySelector(`.map__filters`);
const mapFilterSelects = mapFilter.querySelectorAll(`select`);
const mapFilterInputs = mapFilter.querySelectorAll(`input`);

const setStatusDisabled = (elements) => {
  elements.forEach((element) => {
    element.setAttribute(`disabled`, `true`);
  });
};

// ошибка при получении или отправке данных
const onError = (errorMessage) => {
  const error = document.createElement(`div`);
  error.style.position = `absolute`;
  error.style.top = `180px`;
  error.style.left = `0`;
  error.style.right = `0`;
  error.style.zIndex = `100`;
  error.style.width = `790px`;
  error.style.height = `90px`;
  error.style.margin = `0 auto`;
  error.style.paddingTop = `20px`;
  error.style.fontSize = `35px`;
  error.style.textAlign = `center`;
  error.style.color = `tomato`;
  error.style.backgroundColor = `navy`;
  error.style.border = `5px solid white`;
  error.textContent = errorMessage;
  document.body.insertAdjacentElement(`afterbegin`, error);
  error.addEventListener(`click`, () => {
    error.remove();
  });
  setStatusDisabled(mapFilterSelects);
  setStatusDisabled(mapFilterInputs);
};

window.cityPlan = {
  map,
  mapFilterSelects,
  mapFilterInputs,
  onError,
};
