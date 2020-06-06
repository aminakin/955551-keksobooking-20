'use strict';
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var CHECK_HOURS = ['12:00', '13:00', '14:00'];
var INN_TYPES = ['palace', 'flat', 'house', 'bungalo'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var map = document.querySelector('.map');
map.classList.remove('map--faded');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var pinList = document.querySelector('.map__pins');

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var getMock = function () {
  var result = [];

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

    result[i] = mockElement;
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

var mock = getMock();
var fragment = document.createDocumentFragment();
for (var i = 0; i < mock.length; i++) {
  fragment.appendChild(renderMapPin(mock[i]));
}
pinList.appendChild(fragment);
