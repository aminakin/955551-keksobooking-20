'use strict';
(function () {
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var renderMapPin = function (pin) {
    var pinElement = pinTemplate.cloneNode(true);
    pinElement.style.left = pin.location.x - 25 + 'px';
    pinElement.style.top = pin.location.y - 70 + 'px';
    pinElement.querySelector('img').setAttribute('src', pin.author.avatar);
    pinElement.querySelector('img').setAttribute('alt', pin.offer.title);
    return pinElement;
  };

  var mock = window.data();
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < mock.length; i++) {
    fragment.appendChild(renderMapPin(mock[i]));
  }

  window.map = {
    adds: fragment
  };
})();
