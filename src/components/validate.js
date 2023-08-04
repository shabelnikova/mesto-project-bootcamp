const showInputError = (element, message, error) => {
  element.classList.add('form__item_type_error');
  error.textContent = message;
  console.log(message)
}
const hideInputError = (element, error) => {
  element.classList.remove('form__item_type_error');
  error.textContent = '';
}
const isValid = (element) => {
  const error = document.querySelector(`.${element.id}-error`)
  if (!element.validity.valid) {
    showInputError(element, element.validationMessage, error);
  } else {
    hideInputError(element, error);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some(el => {
    return !el.validity.valid;
  })
}
const toggleButtonState = (inputList, button) => {
  if(hasInvalidInput(inputList)) {
    button.classList.add('form__button_inactive');
  } else {
    button.classList.remove('form__button_inactive');
  }
}
const setEventListeners  = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__item'));
  const button = formElement.querySelector('.form__button');
  toggleButtonState(inputList, button);
  inputList.forEach(input => {
    input.addEventListener('input', () => {
      isValid(input);
      toggleButtonState(inputList, button);
    })
  })
}
export const enableValidation = () => {
  const formList = Array.from(document.forms);
  formList.forEach(item => {
    setEventListeners(item);
  })
}