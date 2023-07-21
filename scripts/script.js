const addBtn = document.querySelector('.profile__edit-button');
const closeBtn = document.querySelector('.popup__closing');
const popupSection = document.querySelector('.popup');

addBtn.addEventListener('click', () => {
  popupSection.classList.add('popup_opened');
});
closeBtn.addEventListener('click', () => {
  popupSection.classList.remove('popup_opened');
});