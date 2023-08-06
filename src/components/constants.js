
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',

    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
export const elementsSection = document.querySelector('.elements');
export const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
export const galleryPopup = document.querySelector('#photoPopup');
export const galleryPopupImg = galleryPopup.querySelector('.popup__img');
export const galleryPopupImgDescription = galleryPopup.querySelector('.popup__img-description');
export const profileBlock = document.querySelector('.profile')
export const addBtn = profileBlock.querySelector('.profile__add-button');
export const editBtn = profileBlock.querySelector('.profile__edit-button');
export const formEdit = document.forms['formEdit'];
export const nameInput = formEdit.querySelector('.form__name');
export const jobInput = formEdit.querySelector('.form__about');
export const formAdd = document.forms['formAdd'];
export const placeInput = formAdd.querySelector('.form__name');
export const imgInput = formAdd.querySelector('.form__about');
export const name = profileBlock.querySelector('.profile__header');
export const job = profileBlock.querySelector('.profile__description');
export const popupBlockEdit = document.querySelector('#editPopup');
export const popupBlockAdd = document.querySelector('#addPopup');
export const popups = [...document.querySelectorAll('.popup')];



