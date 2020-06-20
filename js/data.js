'use strict';
(function () {

  window.getMoke = function () {
    var results = [];
    var mockElement = {};
    var coordX = 0;
    var coordY = 0;

    var getFeaturesArray = function () {
      var features = [];
      for (var j = 0; j <= window.utils.getRandomInt(0, 6); j++) {
        features[j] = window.constants.FEATURES[j];
      }
      return features;
    };

    var getPhotosArray = function () {
      var photos = [];
      for (var k = 0; k <= window.utils.getRandomInt(0, 3); k++) {
        photos[k] = window.constants.PHOTOS[k];
      }
      return photos;
    };

    for (var i = 0; i < 8; i++) {
      coordX = window.utils.getRandomInt(0, 1201);
      coordY = window.utils.getRandomInt(130, 631);

      mockElement = {
        'author': {
          'avatar': 'img/avatars/user0' + (i + 1) + '.png'
        },
        'offer': {
          'title': 'Заголовок ' + (i + 1),
          'address': coordY + ', ' + coordY,
          'price': Math.round(Math.random() * 10) * 10000 + 5000,
          'type': window.constants.INN_TYPES[window.utils.getRandomInt(0, 4)],
          'rooms': window.utils.getRandomInt(1, 4),
          'guests': window.utils.getRandomInt(1, 4),
          'checkin': window.constants.CHECK_HOURS[window.utils.getRandomInt(0, 3)],
          'checkout': window.constants.CHECK_HOURS[window.utils.getRandomInt(0, 3)],
          'features': getFeaturesArray(),
          'description': 'Пример отличного описания ' + (i + 1),
          'photos': getPhotosArray()
        },
        'location': {
          'x': coordX,
          'y': coordY
        }
      };
      results[i] = mockElement;
    }
    console.log(results);
    return results;
  };
})();
