'use strict';

// Валидация и заполнение формы
const MAIN_PIN_WIDTH = 65;
const MAIN_PIN_HEIGHT = 65;
const PIN_TIP_HEIGHT = 22;

const adForm = document.querySelector(`.ad-form`);

// Проверка заполнения заголовка объявления
const inputTitle = adForm.querySelector(`#title`);

const minTitleLength = inputTitle.minLength;
const maxTitleLength = inputTitle.maxLength;

const onInputTitleSetCustomValidity = () => {
  let valueLength = inputTitle.value.length;

  if (valueLength < minTitleLength) {
    inputTitle.setCustomValidity(`Минимальная длина — 30 символов, ещё ${minTitleLength - valueLength} символов`);
  } else if (valueLength > maxTitleLength) {
    inputTitle.setCustomValidity(`Максимальная длина — 100 символов, удалите лишние ${valueLength - maxTitleLength} символов`);
  } else {
    inputTitle.setCustomValidity(``);
  }
  inputTitle.reportValidity();
};

// Заполнение поля адреса
const mapPins = document.querySelector(`.map__pins`);
const mainPin = mapPins.querySelector(`.map__pin--main`);
const pinCenterPositionX = Math.floor(mainPin.offsetLeft + MAIN_PIN_WIDTH / 2);
const pinCenterPositionY = Math.floor(mainPin.offsetTop + MAIN_PIN_HEIGHT / 2);
const mainPinLocation = adForm.querySelector(`#address`);

const initMainPinPosition = () => {
  mainPinLocation.value = `${pinCenterPositionX}, ${pinCenterPositionY}`;
};
initMainPinPosition();

const setupAddress = () => {
  const newPinCenterPositionX = Math.floor(mainPin.offsetLeft + MAIN_PIN_WIDTH / 2);
  const newPinPositionY = Math.floor(mainPin.offsetTop + MAIN_PIN_HEIGHT + PIN_TIP_HEIGHT);
  mainPinLocation.value = `${newPinCenterPositionX}, ${newPinPositionY}`;
};
mainPinLocation.setAttribute(`readonly`, `true`);

// Зависимость, цена за ночь от типа жилья
const inputPrice = adForm.querySelector(`#price`);

const getValidityListMap = () => ({
  valueMissing: `Обязательное поле`,
  badInput: `Пожалуйста, введите число`,
  rangeUnderflow: `Пожалуйста, не меньше ${inputPrice.min}`,
  rangeOverflow: `Пожалуйста, не больше ${inputPrice.max}`
});
const validationPrice = () => {
  const validityListMap = getValidityListMap();
  const errorKey = Object.keys(validityListMap).find((key) => inputPrice.validity[key]);
  inputPrice.setCustomValidity(errorKey ? validityListMap[errorKey] : ``);
};

const onInputPriceCheckValidity = () => {
  validationPrice();
};

const onInputPriceSetCustomValidity = () => {
  validationPrice();
};

const mapTypeToPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const setMinPrice = (minPrice) => {
  inputPrice.setAttribute(`min`, minPrice);
  inputPrice.setAttribute(`placeholder`, minPrice);
};

const selectType = adForm.querySelector(`#type`);

let minPrice = mapTypeToPrice[selectType.value];
setMinPrice(minPrice);

const onSelectTypeChange = () => {
  minPrice = mapTypeToPrice[selectType.value];
  setMinPrice(minPrice);
};

// Зависимость времени заезда от время выезда
const selectCheckIn = adForm.querySelector(`#timein`);
const selectCheckOut = adForm.querySelector(`#timeout`);

const changeCheckIn = (checkIn) => {
  selectCheckIn.value = checkIn;
};
const changeCheckOut = (checkOut) => {
  selectCheckOut.value = checkOut;
};
const onSelectCheckInChange = () => {
  changeCheckOut(selectCheckIn.value);
};

const onSelectCheckOutChange = () => {
  changeCheckIn(selectCheckOut.value);
};

// Зависимость кол-ва гостей от кол-ва комнат
const adFormRoomNumber = adForm.querySelector(`#room_number`);
const adFormGuestNumber = adForm.querySelector(`#capacity`);

const capacityValidValues = {
  '1': [`1`],
  '2': [`1`, `2`],
  '3': [`1`, `2`, `3`],
  '100': [`0`]
};

const setFormCapacity = () => {
  const rooms = adFormRoomNumber.value;
  const options = adFormGuestNumber.querySelectorAll(`option`);
  options.forEach((option) => {
    option.disabled = capacityValidValues[rooms].indexOf(option.value) === -1;
  });
  if (options[adFormGuestNumber.selectedIndex].disabled) {
    adFormGuestNumber.querySelector(`option:not([disabled])`).selected = true;
  }
};
setFormCapacity();

const onAdFormRoomNumberChange = () => {
  setFormCapacity();
};

window.validation = {
  MAIN_PIN_WIDTH,
  MAIN_PIN_HEIGHT,
  PIN_TIP_HEIGHT,
  setupAddress,
  adForm,
  mapPins,
  mainPin,
  initMainPinPosition,
  inputTitle,
  onInputTitleSetCustomValidity,
  inputPrice,
  onInputPriceCheckValidity,
  onInputPriceSetCustomValidity,
  selectType,
  onSelectTypeChange,
  selectCheckIn,
  onSelectCheckInChange,
  selectCheckOut,
  onSelectCheckOutChange,
  adFormRoomNumber,
  onAdFormRoomNumberChange,
};
