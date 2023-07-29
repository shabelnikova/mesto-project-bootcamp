const initialCards = [
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
const profileBlock = document.querySelector('.profile')
const name = profileBlock.querySelector('.profile__header');
const job = profileBlock.querySelector('.profile__description');

const popupBlockEdit = document.querySelector('#editPopup');
const formEdit = popupBlockEdit.querySelector('#formEdit');
const nameInput = formEdit.querySelector('.form__name');
const jobInput = formEdit.querySelector('.form__about');
const editCloseBtn = popupBlockEdit.querySelector('.popup__closing');

const popupBlockAdd = document.querySelector('#addPopup');
const formAdd = popupBlockAdd.querySelector('#formAdd');
const placeInput = formAdd.querySelector('.form__name');
const imgInput = formAdd.querySelector('.form__about');
const addCloseBtn = popupBlockAdd.querySelector('.popup__closing');

const elementsSection = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

const galleryPopup = document.querySelector('#photoPopup');
const galleryPopupImg = galleryPopup.querySelector('.popup__img');
const galleryPopupImgDescription = galleryPopup.querySelector('.popup__img-description');
const galleryPopupClosing = galleryPopup.querySelector('.popup__closing');
