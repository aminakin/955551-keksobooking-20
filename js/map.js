'use strict';
(function () {
  var loadedData = [];
  var filteredData = [];
  var mapFilters = document.querySelector('.map__filters');
  var pinList = document.querySelector('.map__pins');
  var mapFilterSelects = document.querySelectorAll('.map__filter');

  var successHandler = function (ads) {
    loadedData = ads;
    filteredData = ads;
    window.render(loadedData);
  };

  var makeFiltration = function (filterElement) {
    switch (filterElement.id) {
      case 'housing-type':
        if (filterElement.value !== 'any') {
          filteredData = filteredData.filter(function(it) {
            return it.offer.type === filterElement.value;
          });
        }
        return filteredData;
      case 'housing-price':
        return
      case 'housing-rooms':
        if (filterElement.value !== 'any') {
          filteredData = filteredData.filter(function(it) {
            return it.offer.rooms === +filterElement.value;
          });
        }
        return filteredData;
      case 'housing-guests':
        if (filterElement.value !== 'any') {
          filteredData = filteredData.filter(function(it) {
            return it.offer.guests === +filterElement.value;
          });
        }
        return filteredData;
      default:
        return filteredData;
    }
  };

    mapFilters.addEventListener('change', function(evt) {
      window.utils.clearMap();
      filteredData = loadedData;
      for (var i = 0; i < mapFilterSelects.length; i++) {
        makeFiltration(mapFilterSelects[i]);
      }
      console.log(filteredData);
      window.render(filteredData);
      pinList.appendChild(window.mapPinList);
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
