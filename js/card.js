'use strict';
(function () {
  var pinList = document.querySelector('.map__pins');
  var map = document.querySelector('.map');
  var mapFiltersContainer = document.querySelector('.map__filters-container');
  var openedCardCounter = 0;

  var onCardEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      window.cardRemove();
    }
  };

  window.cardRemove = function () {
    map.querySelector('.map__card').remove();
    map.querySelector('.map__pin--active').classList.remove('map__pin--active');
    document.removeEventListener('keydown', onCardEscPress);
    openedCardCounter = 0;
  };

  var cardShow = function (evt) {
    var adNumber = evt.target.closest('button').dataset.adNumber;
    evt.target.closest('button').classList.add('map__pin--active');
    var card = window.mapCardList.querySelector('article[data-ad-number="' + adNumber + '"]').cloneNode(true);
    map.insertBefore(card, mapFiltersContainer);
    document.addEventListener('keydown', onCardEscPress);
    card.querySelector('.popup__close').addEventListener('click', window.cardRemove);
    openedCardCounter = 1;
  };

  pinList.addEventListener('click', function (evt) {
    if (evt.target.closest('button') && evt.target.closest('button').dataset.adNumber) {
      if (openedCardCounter === 1) {
        window.cardRemove();
      }
      cardShow(evt);
    }
  });

  pinList.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter' && evt.target.closest('button') && evt.target.closest('button').dataset.adNumber) {
      if (openedCardCounter === 1) {
        window.cardRemove();
      }
      cardShow(evt);
    }
  });
})();
