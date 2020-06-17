'use strict';
(function () {
  var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  window.data = function () {
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
      mockElement.offer.type = window.constants.INN_TYPES[getRandomInt(0, 4)];
      mockElement.offer.rooms = getRandomInt(1, 4);
      mockElement.offer.guests = getRandomInt(1, 4);
      mockElement.offer.checkin = window.constants.CHECK_HOURS[getRandomInt(0, 3)];
      mockElement.offer.checkout = window.constants.CHECK_HOURS[getRandomInt(0, 3)];
      mockElement.offer.description = 'Пример отличного описания ' + (i + 1);
      for (var j = 0; j <= getRandomInt(0, 6); j++) {
        mockElement.offer.features[j] = window.constants.FEATURES[j];
      }
      for (var k = 0; k <= getRandomInt(0, 3); k++) {
        mockElement.offer.photos[k] = window.constants.PHOTOS[k];
      }

      results[i] = mockElement;
    }

    return results;
  };
})();
