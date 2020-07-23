'use strict';
(function () {
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  var fragmentPin = document.createDocumentFragment();
  var fragmentCard = document.createDocumentFragment();
  var renderMapPin = function (pin, adNumber) {
    var pinCopy = pinTemplate.cloneNode(true);
    pinCopy.style.left = pin.location.x - 25 + 'px';
    pinCopy.style.top = pin.location.y - 70 + 'px';
    pinCopy.querySelector('img').setAttribute('src', pin.author.avatar);
    pinCopy.querySelector('img').setAttribute('alt', pin.offer.title);
    pinCopy.dataset.adNumber = adNumber;
    return pinCopy;
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
  };

  var getCardPhotos = function (element, dataArray) {
    var result = document.createDocumentFragment();
    for (var j = 0; j < dataArray.length; j++) {
      var singlePhoto = element.cloneNode(true);
      singlePhoto.setAttribute('src', dataArray[j]);
      result.appendChild(singlePhoto);
    }
    return result;
  };

  var renderCard = function (cardData, adNumber) {
    var cardCopy = cardTemplate.cloneNode(true);
    var offerType = cardData.offer.type;
    var cardPhoto = cardCopy.querySelector('.popup__photo');
    var offerPhotos = cardData.offer.photos;
    var cardFeaturesList = cardCopy.querySelector('.popup__features');
    var cardFeaturesMembers = cardFeaturesList.querySelectorAll('.popup__feature');
    cardCopy.dataset.adNumber = adNumber;
    cardCopy.querySelector('.popup__title').textContent = cardData.offer.title;
    cardCopy.querySelector('.popup__text--address').textContent = cardData.offer.address;
    cardCopy.querySelector('.popup__text--price').textContent = cardData.offer.price + ' ₽/ночь';
    cardCopy.querySelector('.popup__type').textContent = getOfferType(offerType);
    cardCopy.querySelector('.popup__text--capacity').textContent = cardData.offer.rooms + ' комнаты для ' + cardData.offer.guests + ' гостей';
    cardCopy.querySelector('.popup__text--time').textContent = 'заезд после ' + cardData.offer.checkin + ', выезд до ' + cardData.offer.checkout;
    cardCopy.querySelector('.popup__description').textContent = cardData.offer.description;
    cardCopy.querySelector('.popup__avatar').setAttribute('src', cardData.author.avatar);
    cardCopy.querySelector('.popup__photos').removeChild(cardPhoto);
    cardCopy.querySelector('.popup__photos').appendChild(getCardPhotos(cardPhoto, offerPhotos));
    for (var l = 0; l < cardFeaturesMembers.length; l++) {
      cardFeaturesMembers[l].style = 'display: none';
    }
    for (var k = 0; k < cardData.offer.features.length; k++) {
      if (cardFeaturesList.querySelector('.popup__feature--' + cardData.offer.features[k])) {
        cardFeaturesList.querySelector('.popup__feature--' + cardData.offer.features[k]).style = '';
      }
    }
    return cardCopy;
  };

  var renderAll = function (ads) {
    var renderedCards = fragmentCard.querySelectorAll('article');
    for (var m = 0; m < renderedCards.length; m++) {
      renderedCards[m].remove();
    }
    for (var i = 0; i < ads.length; i++) {
      fragmentPin.appendChild(renderMapPin(ads[i], i));
      fragmentCard.appendChild(renderCard(ads[i], i));
    }
  };
  window.render = {
    renderAll: renderAll,
    mapPinList: fragmentPin,
    mapCardList: fragmentCard
  };
})();
