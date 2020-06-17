'use strict';
(function () {
  var map = document.querySelector('.map');
  var pinList = document.querySelector('.map__pins');
  var adForm = document.querySelector('.ad-form');
  var adFormFieldsets = document.querySelectorAll('.ad-form fieldset');
  var filterFieldsets = document.querySelectorAll('.map__filters fieldset');
  var filterSelects = document.querySelectorAll('.map__filters select');
  var mapPinMain = document.querySelector('.map__pin--main');
  var address = document.querySelector('#address');

  window.form.toggleFormDisabled(adFormFieldsets);
  window.form.toggleFormDisabled(filterFieldsets);
  window.form.toggleFormDisabled(filterSelects);

  window.activate = function () {
    if (map.classList.contains('map--faded')) {
      map.classList.remove('map--faded');
      adForm.classList.remove('ad-form--disabled');
      window.form.toggleFormDisabled(adFormFieldsets);
      window.form.toggleFormDisabled(filterFieldsets);
      window.form.toggleFormDisabled(filterSelects);
      address.value = (+mapPinMain.style.left.replace('px', '') + Math.round(window.constants.MAPPINMAIN_WIDTH / 2)) + ', ' + (+mapPinMain.style.top.replace('px', '') + Math.round(window.constants.MAPPINMAIN_HEIGHT + window.constants.PIN_NEEDLE_CORR_Y));
      pinList.appendChild(window.map.adds);
    }
    else {
      return
    }
  };
})();
