'use strict';
(function () {
  var mapPinMain = document.querySelector('.map__pin--main');
  var pinList = document.querySelector('.map__pins');
  var address = document.querySelector('#address');

  mapPinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      if ((mapPinMain.offsetTop - shift.y) >= (130 - Math.round(window.constants.MAPPINMAIN_HEIGHT + window.constants.PIN_NEEDLE_CORR_Y)) && (mapPinMain.offsetTop - shift.y) <= (630 - Math.round(window.constants.MAPPINMAIN_HEIGHT + window.constants.PIN_NEEDLE_CORR_Y)) && (mapPinMain.offsetLeft - shift.x) >= -Math.round(window.constants.MAPPINMAIN_WIDTH / 2) && (mapPinMain.offsetLeft - shift.x) <= (pinList.offsetWidth - Math.round(window.constants.MAPPINMAIN_WIDTH / 2))) {
        mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + 'px';
        mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + 'px';
        address.value = (+mapPinMain.style.left.replace('px', '') + Math.round(window.constants.MAPPINMAIN_WIDTH / 2)) + ', ' + (+mapPinMain.style.top.replace('px', '') + Math.round(window.constants.MAPPINMAIN_HEIGHT + window.constants.PIN_NEEDLE_CORR_Y));
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
