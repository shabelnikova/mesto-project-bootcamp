import {openPopup} from "./modal";
import {
  cardTemplate,
  elementsSection,
  galleryPopup,
  galleryPopupImg,
  galleryPopupImgDescription,
  initialCards
} from "./constants";


export const renderCards = () => {
  initialCards.forEach((item) => {
    elementsSection.append(createCard(item.name, item.link));
  })
}
export const createCard = (name, link) => {
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
