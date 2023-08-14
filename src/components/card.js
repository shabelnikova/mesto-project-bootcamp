import {openPopup, closePopup} from "./modal";
import {
  cardTemplate, deleteCardPopup,
  elementsSection, formCardDelete,
  galleryPopup,
  galleryPopupImg,
  galleryPopupImgDescription,
} from "./constants";
import {addLike, config, deleteCard, deleteLike, getCards} from "./api";
import trashSymbol from '../images/trash.svg';
export const renderCards = () => {
  getCards()
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .then((data) => data)
    .then(res => {
      res.forEach(item => {
        elementsSection.append(createCard(item.name, item.link, item.owner._id, item._id, item.likes));
      })
    })
    .catch(res =>  Promise.reject(`Ошибка: ${res.status}`))
}
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
  if(ownerId === config.id) {
    const deleteSymbol = card.querySelector('.card__delete-symbol');
    deleteSymbol.innerHTML = `<img src=${trashSymbol} alt="Кнопка удаления">`;
    deleteSymbol.addEventListener('click', () => {
      openPopup(deleteCardPopup);
      formCardDelete.addEventListener('submit', (e) => {
        e.preventDefault();
        deleteCard(cardId)
          .catch(res =>  Promise.reject(`Ошибка: ${res.status}`));
        card.remove();
        closePopup(deleteCardPopup);
      })
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
        .then(res => {
          if(res.ok) {
            return res.json();
          }
        })
        .then(res => likes.textContent = res.likes.length);
    } else {
      deleteLike(cardId)
        .then(res => {
          if(res.ok) {
            return res.json();
          }
        })
        .then(res => likes.textContent = res.likes.length)
        .catch(res =>  Promise.reject(`Ошибка: ${res.status}`))
    }
  });
  return card;
}
