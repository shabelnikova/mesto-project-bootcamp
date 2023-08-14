import './pages/index.css';
import {createCard, renderCards} from "./components/card";
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
import {createUser} from "./components/profile";
import {createNewCard, editUser, updateAvatar} from "./components/api";


enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item_error'
});

renderCards();

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
  e.submitter.textContent = 'Сохранение...'
  editUser(nameInput.value, jobInput.value)
    .then(res => {
      if(res.ok) {
        return res.json();
      }
    })
    .then(res => {
      userName.textContent = res.name;
      userAbout.textContent = res.about;
    })
    .catch(res =>  Promise.reject(`Ошибка: ${res.status}`))
  e.submitter.classList.add('form__button_inactive');
  e.submitter.setAttribute('disabled', '');
  console.log(e)
  closePopup(popupBlockEdit);
  e.submitter.textContent = 'Сохранить'
});
formAdd.addEventListener('submit', (e) => {
  e.preventDefault();
  e.submitter.textContent = 'Сохранение...';
  createNewCard(placeInput.value, imgInput.value)
    .then(res => {
      if(res.ok) {
        return res.json();
      }
    })
    .then(res => {
      elementsSection.prepend(createCard(res.name, res.link, res.owner._id, res._id, res.likes));
      console.log(res)
    })
    .catch(res =>  Promise.reject(`Ошибка: ${res.status}`))
  formAdd.reset();
  e.submitter.classList.add('form__button_inactive');
  e.submitter.setAttribute('disabled', '');
  closePopup(popupBlockAdd);
  e.submitter.textContent = 'Создать'
});
formEditAvatar.addEventListener('submit', (e) => {
  e.preventDefault();
  e.submitter.textContent = 'Сохранение...'
  updateAvatar(avatarInputLink.value)
    .then(res => {
      if(res.ok) {
        return res.json();
      }
    })
    .then(res => {
      avatarImg.src = res.avatar;
      console.log(res)
      avatarImg.alt = userName.textContent;
    })
    .catch(res =>  Promise.reject(`Ошибка: ${res.status}`))
  closePopup(popupBlockAvatarEdit);
  formEditAvatar.reset();
  e.submitter.classList.add('form__button_inactive');
  e.submitter.setAttribute('disabled', '');
  e.submitter.textContent = 'Сохранить';
})

popups.forEach(item => {
  item.addEventListener('mousedown', (e) => {
    if(e.currentTarget === e.target || e.target.classList.contains('popup__closing')) {
      closePopup(item)
    }
  });
})
createUser()
  .catch(res =>  Promise.reject(`Ошибка: ${res.status}`))
