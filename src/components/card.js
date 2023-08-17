import {openPopup, closePopup} from "./modal";
import {
  cardTemplate, deleteCardPopup,
  formCardDelete,
  galleryPopup,
  galleryPopupImg,
  galleryPopupImgDescription,
} from "./constants";
import {addLike, deleteCard, deleteLike} from "./api";
import trashSymbol from '../images/trash.svg';
import {userId} from "./profile";

let cardToDelete;
let cardNumberId;

export const createCard = (name, link, ownerId, cardId, likesArray) => {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const likes = card.querySelector('.card__like-quantity');
  likes.textContent = likesArray.length;
  cardImage.src = link;
  cardImage.alt = name;

  cardImage.addEventListener('click', () => {
    openPopup(galleryPopup);
    galleryPopupImg.src = link;
    galleryPopupImg.alt = name;
    galleryPopupImgDescription.textContent = name;
  })
  card.querySelector('.card__header').textContent = name;
  if(ownerId === userId) {
    const deleteSymbol = card.querySelector('.card__delete-symbol');
    deleteSymbol.innerHTML = `<img src=${trashSymbol} alt="Кнопка удаления">`;
    deleteSymbol.addEventListener('click', () => {
      openPopup(deleteCardPopup);
      cardToDelete = card;
      cardNumberId = cardId;
    });
  }
  const likeButton = card.querySelector('.card__like-symbol');
  if(likesArray.find(el => el._id === ownerId)) {
    likeButton.classList.add('active');
  }
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('active');
    if(likeButton.classList.contains('active')) {
      addLike(cardId)
        .then(res => likes.textContent = res.likes.length)
        .catch(console.error);
    } else {
      deleteLike(cardId)
        .then(res => likes.textContent = res.likes.length)
        .catch(console.error);
    }
  });
  return card;
}
formCardDelete.addEventListener('submit', (e) => {
  e.preventDefault();
  deleteCard(cardNumberId)
    .then(() => {
      cardToDelete.remove()
      closePopup(deleteCardPopup);
    })
    .catch(console.error);
})
