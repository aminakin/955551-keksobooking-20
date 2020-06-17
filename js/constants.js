'use strict';
(function () {
  var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  var CHECK_HOURS = ['12:00', '13:00', '14:00'];
  var INN_TYPES = ['palace', 'flat', 'house', 'bungalo'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var MAPPINMAIN_WIDTH = 65;
  var MAPPINMAIN_HEIGHT = 65;
  var PIN_CORR_Y = 3.5;
  var PIN_NEEDLE_CORR_Y = 16;

  window.constants = {
    PHOTOS: PHOTOS,
    CHECK_HOURS: CHECK_HOURS,
    INN_TYPES: INN_TYPES,
    FEATURES: FEATURES,
    MAPPINMAIN_WIDTH: MAPPINMAIN_WIDTH,
    MAPPINMAIN_HEIGHT: MAPPINMAIN_HEIGHT,
    PIN_CORR_Y: PIN_CORR_Y,
    PIN_NEEDLE_CORR_Y: PIN_NEEDLE_CORR_Y
  };
})();
