'use strict';
(function () {
  var mapPinMain = document.querySelector('.map__pin--main');

  mapPinMain.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      window.activateMainPage();
    }
  });

  mapPinMain.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      window.activateMainPage();
    }
  });
})();
