import {avatarImg, userAbout, userName} from "./constants";
export let userId;
export const createProfile = (response) => {
  avatarImg.src = response.avatar;
  avatarImg.alt = response.name;
  userName.textContent = response.name;
  userAbout.textContent = response.about;
  userId = response._id;
}

