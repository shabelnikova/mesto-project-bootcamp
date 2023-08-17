import './pages/index.css';
import {createCard} from "./components/card";
import {enableValidation} from "./components/validate";
import {closePopup, openPopup} from "./components/modal";
import {
  addBtn,
  editBtn,
  elementsSection,
  formAdd,
  formEdit,
  imgInput,
  userAbout,
  jobInput,
  nameInput,
  placeInput,
  popupBlockAdd,
  popupBlockEdit,
  popups,
  userName,
  avatarEdit,
  popupBlockAvatarEdit,
  formEditAvatar,
  avatarInputLink,
  avatarImg,
} from "./components/constants";
import {createProfile} from "./components/profile";
import {createNewCard, editUser, getCards, getUser, updateAvatar} from "./components/api";

Promise.all([getUser(), getCards()])
  .then(([userData, cards]) => {
    createProfile(userData);
    cards.forEach(item => {
      elementsSection.append(createCard(item.name, item.link, item.owner._id, item._id, item.likes));
    })
  })
  .catch(console.error);

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item_error'
});
const renderLoading = (isLoading, button, buttonText = 'Сохранить', loadingText = 'Сохранение...') => {
  if(isLoading)
    button.textContent = loadingText;
  else
    button.textContent = buttonText;
}
addBtn.addEventListener('click', () => {
  openPopup(popupBlockAdd);
});
editBtn.addEventListener('click', () => {
  openPopup(popupBlockEdit);
  nameInput.value = userName.textContent;
  jobInput.value = userAbout.textContent;

});
avatarEdit.addEventListener('click', () => {
  openPopup(popupBlockAvatarEdit);
})
formEdit.addEventListener('submit', (e) => {
  e.preventDefault();
  renderLoading(true, e.submitter);
  editUser(nameInput.value, jobInput.value)
    .then(res => {
      userName.textContent = res.name;
      userAbout.textContent = res.about;
      e.submitter.classList.add('form__button_inactive');
      e.submitter.setAttribute('disabled', '');
      closePopup(popupBlockEdit);
    })
    .catch(console.error)
    .finally(() => renderLoading(false, e.submitter))
});
formAdd.addEventListener('submit', (e) => {
  e.preventDefault();
  renderLoading(true, e.submitter);
  createNewCard(placeInput.value, imgInput.value)
    .then(res => {
      elementsSection.prepend(createCard(res.name, res.link, res.owner._id, res._id, res.likes));
      e.submitter.classList.add('form__button_inactive');
      e.submitter.setAttribute('disabled', '');
      closePopup(popupBlockAdd);
      formAdd.reset();
    })
    .catch(console.error)
    .finally(() => renderLoading(false, e.submitter, 'Создать'))

});
formEditAvatar.addEventListener('submit', (e) => {
  e.preventDefault();
  renderLoading(true, e.submitter);
  updateAvatar(avatarInputLink.value)
    .then(res => {
      console.log(res)
      avatarImg.src = res.avatar;
      avatarImg.alt = userName.textContent;
      closePopup(popupBlockAvatarEdit);
      e.submitter.classList.add('form__button_inactive');
      e.submitter.setAttribute('disabled', '');
      formEditAvatar.reset();
    })
    .catch(console.error)
    .finally(() => renderLoading(false, e.submitter))
})
popups.forEach(item => {
  item.addEventListener('mousedown', (e) => {
    if(e.currentTarget === e.target || e.target.classList.contains('popup__closing')) {
      closePopup(item)
    }
  });
})

