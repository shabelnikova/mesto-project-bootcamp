

export const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wbf-cohort-11',
  headers: {
    authorization: '583bab91-7255-47af-95fa-3ce7d6743919',
    'Content-Type': 'application/json'
  },
  id: 'dd65714e3d1da631ddfc20a8'
}
export const getUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization
    }
  })
}

export const editUser = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: {
        authorization: config.headers.authorization,
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
  }

export const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    }
  })
};

export const createNewCard = (place, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      name: place,
      link: link
    })
  })
}
export const deleteCard = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    headers: {
      authorization: config.headers.authorization,
    },
    method: 'DELETE',
  })
}
export const addLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    headers: {
      authorization: config.headers.authorization,
    },
    method: 'PUT',
  })
}
export const deleteLike = (cardId) => {
  return fetch (`${config.baseUrl}/cards/likes/${cardId}`, {
    headers: {
      authorization: config.headers.authorization,
    },
    method: 'DELETE',
  })
}
export const updateAvatar = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify({
      avatar: link
    })
  })
}
// https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1600