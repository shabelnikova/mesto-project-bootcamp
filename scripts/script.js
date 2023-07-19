const addBtn = document.querySelector('.profile__edit-button');
const closeBtn = document.querySelector('.popup__closing');
const popupSection = document.querySelector('.popup');

addBtn.addEventListener('click', () => {
  popupSection.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  popupSection.style.display = 'none';
});