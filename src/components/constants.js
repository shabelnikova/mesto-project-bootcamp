

export const elementsSection = document.querySelector('.elements');
export const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
export const galleryPopup = document.querySelector('#photoPopup');
export const galleryPopupImg = galleryPopup.querySelector('.popup__img');
export const galleryPopupImgDescription = galleryPopup.querySelector('.popup__img-description');
export const profileBlock = document.querySelector('.profile')
export const addBtn = profileBlock.querySelector('.profile__add-button');
export const editBtn = profileBlock.querySelector('.profile__edit-button');
export const avatarEdit = profileBlock.querySelector('.profile__image-wrapper');
export const formEdit = document.forms['formEdit'];
export const nameInput = formEdit.querySelector('.form__name');
export const jobInput = formEdit.querySelector('.form__about');
export const formAdd = document.forms['formAdd'];
export const formEditAvatar = document.forms['formAddAvatar'];
export const formCardDelete = document.forms['deleteCardPermit'];
export const avatarInputLink = formEditAvatar.querySelector('.form__avatar-img');
export const placeInput = formAdd.querySelector('.form__name');
export const imgInput = formAdd.querySelector('.form__about');
export const avatarImg = profileBlock.querySelector('.profile__avatar');
export const userName = profileBlock.querySelector('.profile__header');
export const userAbout = profileBlock.querySelector('.profile__description');
export const popupBlockEdit = document.querySelector('#editPopup');
export const popupBlockAdd = document.querySelector('#addPopup');
export const popupBlockAvatarEdit = document.querySelector('#avatarEditPopup');
export const popups = [...document.querySelectorAll('.popup')];
export const deleteCardPopup = document.querySelector('#deleteCardPopup');

