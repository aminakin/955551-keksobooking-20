'use strict';
(function () {
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  var pinList = document.querySelector('.map__pins');
  var fragmentPin = document.createDocumentFragment();
  var fragmentCard = document.createDocumentFragment();
  var renderMapPin = function (pin, adNumber) {
    var pinElement = pinTemplate.cloneNode(true);
    pinElement.style.left = pin.location.x - 25 + 'px';
    pinElement.style.top = pin.location.y - 70 + 'px';
    pinElement.querySelector('img').setAttribute('src', pin.author.avatar);
    pinElement.querySelector('img').setAttribute('alt', pin.offer.title);
    pinElement.querySelector('img').dataset.adNumber = adNumber;
    pinElement.dataset.adNumber = adNumber;
    return pinElement;
  };

  var getOfferType = function (offerType) {
  switch (offerType) {
    case 'flat':
      return 'Квартира';
    case 'bungalo':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      return 'Жильё';
    }
  }

  var getCardPhotos = function (element, dataArray) {
    var result = document.createDocumentFragment();
    for (var j = 0; j < dataArray.length; j++) {
      var singlePhoto = element.cloneNode(true);
      singlePhoto.setAttribute('src', dataArray[j]);
      result.appendChild(singlePhoto);
    }
    return result
  }

  var renderCard = function (cardData, adNumber) {
    var cardElement = cardTemplate.cloneNode(true);
    var offerType = cardData.offer.type;
    var cardPhoto = cardElement.querySelector('.popup__photo');
    var offerPhotos = cardData.offer.photos;
    var cardFeaturesList = cardElement.querySelector('.popup__features');
    var cardFeaturesElements = cardFeaturesList.querySelectorAll('.popup__feature');
    cardElement.dataset.adNumber = adNumber;
    cardElement.querySelector('.popup__title').textContent = cardData.offer.title;
    cardElement.querySelector('.popup__text--address').textContent = cardData.offer.address;
    cardElement.querySelector('.popup__text--price').textContent = cardData.offer.price + ' ₽/ночь';
    cardElement.querySelector('.popup__type').textContent = getOfferType(offerType);
    cardElement.querySelector('.popup__text--capacity').textContent = cardData.offer.rooms + ' комнаты для ' + cardData.offer.guests + ' гостей';
    cardElement.querySelector('.popup__text--time').textContent = 'заезд после ' + cardData.offer.checkin + ', выезд до ' + cardData.offer.checkout;
    cardElement.querySelector('.popup__description').textContent = cardData.offer.description;
    cardElement.querySelector('.popup__avatar').setAttribute('src', cardData.author.avatar);
    cardElement.querySelector('.popup__photos').removeChild(cardPhoto);
    cardElement.querySelector('.popup__photos').appendChild(getCardPhotos(cardPhoto, offerPhotos));
    for (var l = 0; l < cardFeaturesElements.length; l++) {
      cardFeaturesElements[l].style = 'display: none';
    }
    for (var k = 0; k < cardData.offer.features.length; k++) {
      if (cardFeaturesList.querySelector('.popup__feature--' + cardData.offer.features[k])) {
        cardFeaturesList.querySelector('.popup__feature--' + cardData.offer.features[k]).style = '';
      }
    }
    return cardElement;
  };

  window.render = function (ads) {
    var renderCount = function () {
      if (ads.length < window.constants.MAX_SHOWN_ADS) {
        return ads.length;
      }
      else {
        return window.constants.MAX_SHOWN_ADS;
      }
    }
    for (var i = 0; i < renderCount(); i++) {
      fragmentPin.appendChild(renderMapPin(ads[i], i));
      fragmentCard.appendChild(renderCard(ads[i], i));
    }
  }
  window.mapPinList = fragmentPin;
  window.mapCardList = fragmentCard;
})();
