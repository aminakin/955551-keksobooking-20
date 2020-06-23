'use strict';
(function () {
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var fragment = document.createDocumentFragment();
  var renderMapPin = function (pin) {
    var pinElement = pinTemplate.cloneNode(true);
    pinElement.style.left = pin.location.x - 25 + 'px';
    pinElement.style.top = pin.location.y - 70 + 'px';
    pinElement.querySelector('img').setAttribute('src', pin.author.avatar);
    pinElement.querySelector('img').setAttribute('alt', pin.offer.title);
    return pinElement;
  };

  var successHandler = function (adds) {
    for (var i = 0; i < adds.length; i++) {
      fragment.appendChild(renderMapPin(adds[i]));
    }
  };

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

  window.loadAdds(successHandler, errorHandler);
  window.mapPinList = fragment;
})();
