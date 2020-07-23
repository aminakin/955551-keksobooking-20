'use strict';
(function () {
  var map = document.querySelector('.map');
  var adForm = document.querySelector('.ad-form');
  var filterForm = document.querySelector('.map__filters');
  var adFormFieldsets = document.querySelectorAll('.ad-form fieldset');
  var filterFieldsets = document.querySelectorAll('.map__filters fieldset');
  var filterSelects = document.querySelectorAll('.map__filters select');
  var mapPinMain = document.querySelector('.map__pin--main');
  var mapPinMainStyleLeft = mapPinMain.style.left;
  var mapPinMainStyleTop = mapPinMain.style.top;
  var address = document.querySelector('#address');

  window.utils.toggleFormDisabled(adFormFieldsets);
  window.utils.toggleFormDisabled(filterFieldsets);
  window.utils.toggleFormDisabled(filterSelects);

  var activateMainPage = function () {
    if (map.classList.contains('map--faded')) {
      map.classList.remove('map--faded');
      adForm.classList.remove('ad-form--disabled');
      window.utils.toggleFormDisabled(adFormFieldsets);
      window.utils.toggleFormDisabled(filterFieldsets);
      window.utils.toggleFormDisabled(filterSelects);
      address.value = (+mapPinMainStyleLeft.replace('px', '') + Math.round(window.constants.MAPPINMAIN_WIDTH / 2)) + ', ' + (+mapPinMainStyleTop.replace('px', '') + Math.round(window.constants.MAPPINMAIN_HEIGHT + window.constants.PIN_NEEDLE_CORR_Y));
      window.loadAds(window.map.successHandler, window.map.errorHandler);
    } else {
      return;
    }
  };

  var deactivateMainPage = function () {
    window.utils.clearMap();
    adForm.reset();
    filterForm.reset();
    window.utils.toggleFormDisabled(adFormFieldsets);
    window.utils.toggleFormDisabled(filterFieldsets);
    window.utils.toggleFormDisabled(filterSelects);
    address.value = (+mapPinMainStyleLeft.replace('px', '') + Math.round(window.constants.MAPPINMAIN_WIDTH / 2)) + ', ' + (+mapPinMainStyleTop.replace('px', '') + Math.round(window.constants.MAPPINMAIN_HEIGHT / 2 - window.constants.PIN_CORR_Y));
    map.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    mapPinMain.style.left = mapPinMainStyleLeft;
    mapPinMain.style.top = mapPinMainStyleTop;
  };

  window.main = {
    activateMainPage: activateMainPage,
    deactivateMainPage: deactivateMainPage
  };
})();
