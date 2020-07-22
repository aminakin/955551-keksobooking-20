'use strict';
(function () {
  var adForm = document.querySelector('.ad-form');
  var adInputs = adForm.querySelectorAll('input');
  var adSelects = adForm.querySelectorAll('select');
  var showError = function (elem) {
    if (elem.validity.valid) {
      elem.style.boxShadow = 'none';
    } else {
      elem.reportValidity();
      elem.style.boxShadow = '0 0 2px 2px red';
    }
  };
  window.sendAdds = function (onSuccess, onError) {
    var adFields = Array.from(adInputs).concat(Array.from(adSelects));
    for (var i = 0; i < adFields.length; i++) {
      showError(adFields[i]);
      if (adFields[i].checkValidity() === false) {
        showError(adFields[i]);
        var stopSubmit = 1;
      }
    }
    if (stopSubmit !== 1) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onSuccess();
        } else {
          onError();
        }
      });
      xhr.open('POST', window.constants.SEND_URL);
      xhr.send(new FormData(adForm));
    }
  };
})();
