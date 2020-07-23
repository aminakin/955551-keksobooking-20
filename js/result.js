'use strict';
(function () {
  var adSubmit = document.querySelector('.ad-form__submit');
  var formReset = document.querySelector('.ad-form__reset');
  var mainContent = document.querySelector('main');
  var successMessage = document.querySelector('#success').content.querySelector('.success');
  var errorMessage = document.querySelector('#error').content.querySelector('.error');
  var onPopupPress = function (evt) {
    var message = document.querySelector('.result-popup');
    if (evt.key === 'Escape') {
      evt.preventDefault();
      messageRemove(message);
    } else if (evt.target !== message.querySelector('p:first-child')) {
      messageRemove(message);
    }
  };
  var messageRemove = function (message) {
    message.remove();
    document.removeEventListener('click', onPopupPress);
    document.removeEventListener('keydown', onPopupPress);
  };
  var successHandler = function () {
    successMessage.classList.add('result-popup');
    mainContent.appendChild(successMessage);
    document.addEventListener('click', onPopupPress);
    document.addEventListener('keydown', onPopupPress);
    window.main.deactivateMainPage();
  };
  var errorHandler = function () {
    errorMessage.classList.add('result-popup');
    mainContent.appendChild(errorMessage);
    document.addEventListener('click', onPopupPress);
    document.addEventListener('keydown', onPopupPress);
  };
  adSubmit.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.sendAdds(successHandler, errorHandler);
  });
  formReset.addEventListener('click', function () {
    window.main.deactivateMainPage();
  });
})();
