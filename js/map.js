'use strict';
(function () {
  var loadedData = [];
  var filteredData = [];
  var mapFilters = document.querySelector('.map__filters');
  var pinList = document.querySelector('.map__pins');
  var mapFilterSelects = document.querySelectorAll('.map__filter');
  var mapFilterCheckboxes = document.querySelectorAll('.map__checkbox');
  var mapFilterElements = Array.from(mapFilterSelects).concat(Array.from(mapFilterCheckboxes));

  var successHandler = function (ads) {
    loadedData = ads;
    filteredData = ads;
    window.render(loadedData);
  };

  var updateMapInfo = function () {
    window.utils.clearMap();
    filteredData = window.makeFiltration(mapFilterElements, loadedData);
    window.render(filteredData);
    pinList.appendChild(window.mapPinList);
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

  window.loadAds(successHandler, errorHandler);
})();
