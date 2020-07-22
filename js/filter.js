'use strict';
(function () {

  var filteredData = [];

  var checkFilter = function (filterElement) {
    switch (filterElement.id) {
      case 'housing-type':
        if (filterElement.value !== 'any') {
          filteredData = filteredData.filter(function (it) {
            return it.offer.type === filterElement.value;
          });
        }
        return filteredData;
      case 'housing-price':
        if (filterElement.value !== 'any') {
          if (filterElement.value === 'low') {
            filteredData = filteredData.filter(function (it) {
              return it.offer.price < window.constants.LOW_RENT;
            });
          } else if (filterElement.value === 'middle') {
            filteredData = filteredData.filter(function (it) {
              return (it.offer.price >= window.constants.LOW_RENT && it.offer.price < window.constants.HIGH_RENT);
            });
          } else {
            filteredData = filteredData.filter(function (it) {
              return it.offer.price >= window.constants.HIGH_RENT;
            });
          }
        }
        return filteredData;
      case 'housing-rooms':
        if (filterElement.value !== 'any') {
          filteredData = filteredData.filter(function (it) {
            return it.offer.rooms === +filterElement.value;
          });
        }
        return filteredData;
      case 'housing-guests':
        if (filterElement.value !== 'any') {
          filteredData = filteredData.filter(function (it) {
            return it.offer.guests === +filterElement.value;
          });
        }
        return filteredData;
      case 'filter-wifi':
        if (filterElement.checked) {
          filteredData = getOfferFeatures(filteredData, filterElement);
        }
        return filteredData;
      case 'filter-dishwasher':
        if (filterElement.checked) {
          filteredData = getOfferFeatures(filteredData, filterElement);
        }
        return filteredData;
      case 'filter-parking':
        if (filterElement.checked) {
          filteredData = getOfferFeatures(filteredData, filterElement);
        }
        return filteredData;
      case 'filter-washer':
        if (filterElement.checked) {
          filteredData = getOfferFeatures(filteredData, filterElement);
        }
        return filteredData;
      case 'filter-elevator':
        if (filterElement.checked) {
          filteredData = getOfferFeatures(filteredData, filterElement);
        }
        return filteredData;
      case 'filter-conditioner':
        if (filterElement.checked) {
          filteredData = getOfferFeatures(filteredData, filterElement);
        }
        return filteredData;
      default:
        return filteredData;
    }
  };

  window.makeFiltration = function (filterElements, loadedData) {
    filteredData = loadedData;
    for (var i = 0; i < filterElements.length; i++) {
      checkFilter(filterElements[i], filteredData);
    }
    return filteredData;
  };

  var getOfferFeatures = function (array, feature) {
    array = array.filter(function (it) {
      return it.offer.features.indexOf(feature.value) !== -1;
    });
    return array;
  };
})();
