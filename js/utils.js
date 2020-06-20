'use strict';
(function () {
  window.utils = {
    getRandomInt: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
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
