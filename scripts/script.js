const openPopup = (modalName) => {
  modalName.classList.add('popup_opened');
}
const closePopup = (modalName) => {
  modalName.classList.remove('popup_opened');
}
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
  cardImage.alt = name;
  cardImage.addEventListener('click', () => {
    openPopup(galleryPopup);
    galleryPopupImg.src = link;
    galleryPopupImgDescription.textContent = name;
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
closeButtons.forEach((item) => {
  const popup = item.closest('.popup');
  item.addEventListener('click', () => closePopup(popup));
})
renderCards();