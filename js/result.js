'use strict';
(function () {
  var adSubmit = document.querySelector('.ad-form__submit');
  var formReset = document.querySelector('.ad-form__reset');
  var mainContent = document.querySelector('main');
  var successElement = document.querySelector('#success').content.querySelector('.success');
  var errorElement = document.querySelector('#error').content.querySelector('.error');
  var onPopupPress = function (evt) {
    var message = document.querySelector('.result-popup')
    if (evt.key === 'Escape') {
      evt.preventDefault();
      messageRemove(message);
    }
    else if (evt.target !== message.querySelector('p:first-child')) {
      messageRemove(message);
    }
  }
  var messageRemove = function (message) {
    message.remove();
    document.removeEventListener('click', onPopupPress);
    document.removeEventListener('keydown', onPopupPress);
  }
  var successHandler = function () {
    successElement.classList.add('result-popup');
    mainContent.appendChild(successElement);
    document.addEventListener('click', onPopupPress);
    document.addEventListener('keydown', onPopupPress);
    window.deactivateMainPage();
  }
  var errorHandler = function () {
    errorElement.classList.add('result-popup');
    mainContent.appendChild(errorElement);
    document.addEventListener('click', onPopupPress);
    document.addEventListener('keydown', onPopupPress);
  }
  adSubmit.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.sendAdds(successHandler, errorHandler);
  });
  formReset.addEventListener('click', function () {
    window.deactivateMainPage();
  });
})();
