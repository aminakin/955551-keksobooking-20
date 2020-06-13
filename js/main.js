'use strict';
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var CHECK_HOURS = ['12:00', '13:00', '14:00'];
var INN_TYPES = ['palace', 'flat', 'house', 'bungalo'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var MAPPINMAIN_WIDTH = 65;
var MAPPINMAIN_HEIGHT = 65;
var map = document.querySelector('.map');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var pinList = document.querySelector('.map__pins');
var adForm = document.querySelector('.ad-form');
var adFormFieldsets = document.querySelectorAll('.ad-form fieldset');
var filterFieldsets = document.querySelectorAll('.map__filters fieldset');
var filterSelects = document.querySelectorAll('.map__filters select');
var mapPinMain = document.querySelector('.map__pin--main');
var address = document.querySelector('#address');
var roomNumberSelect = document.querySelector('#room_number');
var capacitySelect = document.querySelector('#capacity');

address.value = (+mapPinMain.style.left.replace('px', '') + Math.round(MAPPINMAIN_WIDTH / 2)) + ', ' + (+mapPinMain.style.top.replace('px', '') + Math.round(MAPPINMAIN_HEIGHT / 2 - 3.5));

var toggleFormDisabled = function (formElements) {
  for (var i = 0; i < formElements.length; i++) {
    if (formElements[i].disabled === false) {
      formElements[i].disabled = true;
    } else {
      formElements[i].disabled = false;
    }
  }
};

toggleFormDisabled(adFormFieldsets);
toggleFormDisabled(filterFieldsets);
toggleFormDisabled(filterSelects);

var activatePage = function () {
  map.classList.remove('map--faded');
  adForm.classList.remove('ad-form--disabled');
  toggleFormDisabled(adFormFieldsets);
  toggleFormDisabled(filterFieldsets);
  toggleFormDisabled(filterSelects);
  address.value = (+mapPinMain.style.left.replace('px', '') + Math.round(MAPPINMAIN_WIDTH / 2)) + ', ' + (+mapPinMain.style.top.replace('px', '') + Math.round(MAPPINMAIN_HEIGHT + 16));
  pinList.appendChild(fragment);
};

mapPinMain.addEventListener('mousedown', function (evt) {
  if (evt.button === 0) {
    activatePage();
  }
});

mapPinMain.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    activatePage();
  }
});

capacitySelect.addEventListener('change', function () {
  if (+capacitySelect.value > 0 && +capacitySelect.value > +roomNumberSelect.value) {
    capacitySelect.setCustomValidity('Выберите меньше гостей для такого количества комнат');
    capacitySelect.reportValidity();
  } else if (+capacitySelect.value > 0 && +roomNumberSelect.value === 100) {
    capacitySelect.setCustomValidity('Выбранное количество комнат не предназначего для гостей');
    capacitySelect.reportValidity();
  } else if (+capacitySelect.value === 0 && +roomNumberSelect.value !== 100) {
    capacitySelect.setCustomValidity('Для негостевого размещения выберите максимальное количество комнат');
    capacitySelect.reportValidity();
  } else {
    capacitySelect.setCustomValidity('');
    roomNumberSelect.setCustomValidity('');
  }
});

roomNumberSelect.addEventListener('change', function () {
  if (+roomNumberSelect.value !== 100 && +capacitySelect.value > +roomNumberSelect.value) {
    roomNumberSelect.setCustomValidity('Для выбранного количества гостей необходимо больше комнат');
    roomNumberSelect.reportValidity();
  } else if (+capacitySelect.value === 0 && +roomNumberSelect.value !== 100) {
    roomNumberSelect.setCustomValidity('Для негостевого размещения выберите максимальное количество комнат');
    roomNumberSelect.reportValidity();
  } else if (+roomNumberSelect.value === 100 && +capacitySelect.value !== 0) {
    roomNumberSelect.setCustomValidity('Такое количество комнат не для гостевого размещения');
    roomNumberSelect.reportValidity();
  } else {
    roomNumberSelect.setCustomValidity('');
    capacitySelect.setCustomValidity('');
  }
});

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var getMock = function () {
  var results = [];

  for (var i = 0; i < 8; i++) {
    var mockElement = {
      'author': {
        'avatar': ''
      },
      'offer': {
        'title': '',
        'address': '',
        'price': 0,
        'type': '',
        'rooms': 0,
        'guests': 0,
        'checkin': '',
        'checkout': '',
        'features': [],
        'description': '',
        'photos': []
      },
      'location': {
        'x': 0,
        'y': 0
      }
    };
    mockElement.author.avatar = 'img/avatars/user0' + (i + 1) + '.png';
    mockElement.offer.title = 'Заголовок ' + (i + 1);
    mockElement.location.x = getRandomInt(0, 1201);
    mockElement.location.y = getRandomInt(130, 631);
    mockElement.offer.address = mockElement.location.x + ', ' + mockElement.location.y;
    mockElement.offer.price = Math.round(Math.random() * 10) * 10000 + 5000;
    mockElement.offer.type = INN_TYPES[getRandomInt(0, 4)];
    mockElement.offer.rooms = getRandomInt(1, 4);
    mockElement.offer.guests = getRandomInt(1, 4);
    mockElement.offer.checkin = CHECK_HOURS[getRandomInt(0, 3)];
    mockElement.offer.checkout = CHECK_HOURS[getRandomInt(0, 3)];
    mockElement.offer.description = 'Пример отличного описания ' + (i + 1);
    for (var j = 0; j <= getRandomInt(0, 6); j++) {
      mockElement.offer.features[j] = FEATURES[j];
    }
    for (var k = 0; k <= getRandomInt(0, 3); k++) {
      mockElement.offer.photos[j] = PHOTOS[j];
    }

    results[i] = mockElement;
  }

  return results;
};

var renderMapPin = function (pin) {
  var pinElement = pinTemplate.cloneNode(true);
  pinElement.style.left = pin.location.x - 25 + 'px';
  pinElement.style.top = pin.location.y - 70 + 'px';
  pinElement.querySelector('img').setAttribute('src', pin.author.avatar);
  pinElement.querySelector('img').setAttribute('alt', pin.offer.title);
  return pinElement;
};

var mock = getMock();
var fragment = document.createDocumentFragment();
for (var i = 0; i < mock.length; i++) {
  fragment.appendChild(renderMapPin(mock[i]));
}
