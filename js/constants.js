'use strict';
(function () {
  var MAPPINMAIN_WIDTH = 65;
  var MAPPINMAIN_HEIGHT = 65;
  var PIN_CORR_Y = 3.5;
  var PIN_NEEDLE_CORR_Y = 16;
  var DATA_URL = 'https://javascript.pages.academy/keksobooking/data';
  var SEND_URL = 'https://javascript.pages.academy/keksobooking';
  var GET_DATA_TIMEOUT = 5000;
  var MAX_SHOWN_ADS = 5;
  var LOW_RENT = 10000;
  var HIGH_RENT = 50000;
  var DEBOUNCE_INTERVAL = 500;

  window.constants = {
    MAPPINMAIN_WIDTH: MAPPINMAIN_WIDTH,
    MAPPINMAIN_HEIGHT: MAPPINMAIN_HEIGHT,
    PIN_CORR_Y: PIN_CORR_Y,
    PIN_NEEDLE_CORR_Y: PIN_NEEDLE_CORR_Y,
    DATA_URL: DATA_URL,
    SEND_URL: SEND_URL,
    GET_DATA_TIMEOUT: GET_DATA_TIMEOUT,
    MAX_SHOWN_ADS: MAX_SHOWN_ADS,
    LOW_RENT: LOW_RENT,
    HIGH_RENT: HIGH_RENT,
    DEBOUNCE_INTERVAL: DEBOUNCE_INTERVAL
  };
})();
