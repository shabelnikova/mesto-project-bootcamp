export const openPopup = (modalName) => {
  modalName.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);

}
export const closePopup = (modalName) => {
  modalName.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}
const closeByEscape = (e) => {
  if(e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}