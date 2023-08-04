export const openPopup = (modalName) => {
  modalName.classList.add('popup_opened');
  window.addEventListener('keydown', (e) => {
    if(e.code === 'Escape')
      closePopup(modalName);
  })
}
export const closePopup = (modalName) => {
  modalName.classList.remove('popup_opened');
}