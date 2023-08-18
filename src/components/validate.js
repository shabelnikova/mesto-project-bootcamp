const showInputError = (element, message, error, settings) => {
  element.classList.add(settings.inputErrorClass);
  error.textContent = message;
}
const hideInputError = (element, error, settings) => {
  element.classList.remove(settings.inputErrorClass);
  error.textContent = '';
}
const isValid = (element, settings) => {
  const error = document.querySelector(`.${element.id}-error`)
  if (!element.validity.valid) {
    showInputError(element, element.validationMessage, error, settings);
  } else {
    hideInputError(element, error, settings);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some(el => {
    return !el.validity.valid;
  })
}
const toggleButtonState = (inputList, button, settings) => {
  if(hasInvalidInput(inputList)) {
    button.classList.add(settings.inactiveButtonClass);
    button.setAttribute('disabled', '');
  } else {
    button.classList.remove(settings.inactiveButtonClass);
    button.removeAttribute('disabled', '');
  }
}
const setEventListeners  = (formElement, settings) => {
  const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
  const button = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, button, settings);
  inputList.forEach(input => {
    input.addEventListener('input', () => {
      isValid(input, settings);
      toggleButtonState(inputList, button, settings);
    })
  })
}
export const enableValidation = (settings) => {
  const formList = [...document.querySelectorAll(settings.formSelector)];
  formList.forEach(item => {
    setEventListeners(item, settings);
  })
}
