'use strict';
(function () {
  var loadedData = [];
  var filteredData = [];
  var mapFilters = document.querySelector('.map__filters');
  var pinList = document.querySelector('.map__pins');

  var successHandler = function (ads) {
    loadedData = ads;
    filteredData = ads;
    window.render.renderAll(loadedData.slice(0, window.constants.MAX_SHOWN_ADS));
    pinList.appendChild(window.render.mapPinList);
  };

  var updateMapInfo = function () {
    window.utils.clearMap();
    filteredData = window.filters.getAdverts(loadedData);
    window.render.renderAll(filteredData);
    pinList.appendChild(window.render.mapPinList);
  };

  mapFilters.addEventListener('change', function () {
    window.debounce(updateMapInfo);
  });

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'fixed';
    node.style.top = '40%';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.map = {
    successHandler: successHandler,
    errorHandler: errorHandler
  };
})();
