import {checkResponse} from "./utils";


const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wbf-cohort-11',
  headers: {
    authorization: '583bab91-7255-47af-95fa-3ce7d6743919',
    'Content-Type': 'application/json'
  },

}
export const getUser = () => {
  return checkRequest(`/users/me`, {
    headers: config.headers
  })
}
export const editUser = (name, about) => {
    return checkRequest(`/users/me`, {
      headers: config.headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
  }
export const getCards = () => {
  return checkRequest(`/cards`, {
    headers: config.headers
  })
};
export const createNewCard = (place, link) => {
  return checkRequest(`/cards`, {
    headers: config.headers,
    method: 'POST',
    body: JSON.stringify({
      name: place,
      link: link
    })
  })
}
export const deleteCard = (id) => {
  return checkRequest(`/cards/${id}`, {
    headers: config.headers,
    method: 'DELETE',
  })
}
export const addLike = (cardId) => {
  return checkRequest(`/cards/likes/${cardId}`, {
    headers: config.headers,
    method: 'PUT',
  })
}
export const deleteLike = (cardId) => {
  return checkRequest (`/cards/likes/${cardId}`, {
    headers: config.headers,
    method: 'DELETE',
  })
}
export const updateAvatar = (link) => {
return checkRequest('/users/me/avatar', {
    headers: config.headers,
    method: 'PATCH',
    body: JSON.stringify({
      avatar: link
    })
})
}

const checkRequest = (endpoint, options) => {
  console.log()
  return fetch(config.baseUrl + endpoint, options).then(res => checkResponse(res));
}
