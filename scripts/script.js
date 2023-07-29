const openPopup = (modalName) => {
  modalName.classList.add('popup_opened');
}
const closePopup = (modalName) => {
  modalName.classList.remove('popup_opened');
}
editCloseBtn.addEventListener('click', () => {
  closePopup(popupBlockEdit);
});
profileBlock.addEventListener('click', (e) => {
  if(e.target.className === 'profile__icon-edit')
    openPopup(popupBlockEdit, formEdit);
  if(e.target.className === 'profile__add-button')
    openPopup(popupBlockAdd, formAdd);
});
formEdit.addEventListener('submit', (e) => {
  e.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  formEdit.reset();
  closePopup(popupBlockEdit);
});
addCloseBtn.addEventListener('click', () => {
  closePopup(popupBlockAdd);
});

formAdd.addEventListener('submit', (e) => {
  e.preventDefault();
  elementsSection.prepend(createCard(placeInput.value, imgInput.value));
  formAdd.reset();
  closePopup(popupBlockAdd);
});
const createCard = (name, link) => {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  cardImage.src = link;
  cardImage.addEventListener('click', () => {
    console.log('hello')
    openPopup(galleryPopup);
    galleryPopupImg.src = link;
    galleryPopupImgDescription.textContent = name;
    galleryPopupClosing.addEventListener('click', () => {
      closePopup(galleryPopup);
    })
  })
  card.querySelector('.card__header').textContent = name;
  card.querySelector('.card__delete-symbol').addEventListener('click', () => {
    card.remove();
  });
  const likeButton = card.querySelector('.card__like-symbol');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('active');
  });
  return card;
}
renderCards = () => {
  initialCards.forEach((item) => {
    elementsSection.append(createCard(item.name, item.link));
  })
}
renderCards();