'use strict';
var map = document.querySelector('.map');
map.classList.remove('map--faded');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var pinList = document.querySelector('.map__pins');
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var CHECK_TIME = ['12:00', '13:00', '14:00'];
var INN_TYPE = ['palace', 'flat', 'house', 'bungalo'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];


var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var getMoke = function () {
  var result = [];

  for (var i = 0; i < 8; i++) {
    var mokeElement = {
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
    mokeElement.author.avatar = 'img/avatars/user0' + (i + 1) + '.png';
    mokeElement.offer.title = 'Заголовок ' + (i + 1);
    mokeElement.location.x = getRandomInt(0, 1201);
    mokeElement.location.y = getRandomInt(130, 631);
    mokeElement.offer.address = mokeElement.location.x + ', ' + mokeElement.location.y;
    mokeElement.offer.price = Math.round(Math.random() * 10) * 10000 + 5000;
    mokeElement.offer.type = INN_TYPE[getRandomInt(0, 4)];
    mokeElement.offer.rooms = getRandomInt(1, 4);
    mokeElement.offer.guests = getRandomInt(1, 4);
    mokeElement.offer.checkin = CHECK_TIME[getRandomInt(0, 3)];
    mokeElement.offer.checkout = CHECK_TIME[getRandomInt(0, 3)];
    mokeElement.offer.description = 'Пример отличного описания ' + (i + 1);
    for (var j = 0; j <= getRandomInt(0, 6); j++) {
      mokeElement.offer.features[j] = FEATURES[j];
    }
    for (var k = 0; k <= getRandomInt(0, 3); k++) {
      mokeElement.offer.photos[j] = PHOTOS[j];
    }

    result[i] = mokeElement;
  }

  return result;
};

var renderMapPin = function (pin) {
  var pinElement = pinTemplate.cloneNode(true);
  pinElement.style.left = pin.location.x - 25 + 'px';
  pinElement.style.top = pin.location.y - 70 + 'px';
  pinElement.querySelector('img').setAttribute('src', pin.author.avatar);
  pinElement.querySelector('img').setAttribute('alt', pin.offer.title);
  return pinElement;
};

var moke = getMoke();
var fragment = document.createDocumentFragment();
for (var i = 0; i < moke.length; i++) {
  fragment.appendChild(renderMapPin(moke[i]));
}
pinList.appendChild(fragment);
