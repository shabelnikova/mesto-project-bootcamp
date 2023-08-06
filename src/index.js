import './pages/index.css';
import {createCard, renderCards} from "./components/card";
import {enableValidation} from "./components/validate";
import {closePopup, openPopup} from "./components/modal";
import {
  addBtn,
  editBtn, elementsSection, formAdd,
  formEdit, imgInput,
  job,
  jobInput,
  nameInput, placeInput,
  popupBlockAdd,
  popupBlockEdit, popups, name
} from "./components/constants";

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item_error'
});

renderCards();
// enableValidation();
addBtn.addEventListener('click', () => {
  openPopup(popupBlockAdd);
});
editBtn.addEventListener('click', () => {
  openPopup(popupBlockEdit);
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
});
formEdit.addEventListener('submit', (e) => {
  e.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupBlockEdit);
  e.submitter.classList.add('form__button_inactive');
  e.submitter.setAttribute('disabled', '');
});
formAdd.addEventListener('submit', (e) => {
  e.preventDefault();
  elementsSection.prepend(createCard(placeInput.value, imgInput.value));
  formAdd.reset();
  e.submitter.classList.add('form__button_inactive');
  e.submitter.setAttribute('disabled', '');
  closePopup(popupBlockAdd);
});
popups.forEach(item => {
  item.addEventListener('mousedown', (e) => {
    if(e.currentTarget === e.target || e.target.classList.contains('popup__closing')) {
      closePopup(item)
    }
  });
})