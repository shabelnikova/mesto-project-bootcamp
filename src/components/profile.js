import {avatarImg, userAbout, userName} from "./constants";
import {getUser} from "./api";
export const createUser = () => {
  return getUser()
    .then(res => {
      if(res.ok) {
        return res.json();
      }
    })
    .then(res => createProfile(res))
    .catch(res =>  Promise.reject(`Ошибка: ${res.status}`))
}
const createProfile = (response) => {
  avatarImg.src = response.avatar;
  avatarImg.alt = response.name;
  userName.textContent = response.name;
  userAbout.textContent = response.about;
}

