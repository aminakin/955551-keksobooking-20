'use strict';
(function () {
  var mapPinMain = document.querySelector('.map__pin--main');
  var address = document.querySelector('#address');
  var roomNumberSelect = document.querySelector('#room_number');
  var capacitySelect = document.querySelector('#capacity');

  address.value = (+mapPinMain.style.left.replace('px', '') + Math.round(window.constants.MAPPINMAIN_WIDTH / 2)) + ', ' + (+mapPinMain.style.top.replace('px', '') + Math.round(window.constants.MAPPINMAIN_HEIGHT / 2 - window.constants.PIN_CORR_Y));

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

  window.form = {
    toggleFormDisabled: function (formElements) {
      for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].disabled === false) {
          formElements[i].disabled = true;
        } else {
          formElements[i].disabled = false;
        }
      }
    }
  };
})();
